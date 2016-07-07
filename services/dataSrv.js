angular.module('appGen').service({
    '$pixabayService': ['$resource', pixabayService],
    '$dataService': ['$pixabayService', '$q', dataService]
});

function pixabayService($resource) {
    return $resource('https://pixabay.com/api/', {}, {

        query: {
            method: 'GET'
        }
    })
}

function dataService($pixabayService, $q) {
    var self = this;

    self.metaData = {
        title: '',
        description: '',
        url: '',
        openingHours: {

        }
    };

    self.images = {
        token: '',
        hits: [],
        getImages: getImages,
        pBayPromise: undefined
    };

    function getImages() {
        var defered = $q.defer();
        self.images.pBayPromise = defered.promise;
        var params = {
            key: self.images.token,
            q: self.images.query
        }
        $pixabayService.query(params, function (data) {
            self.images.hits = data.hits;
            defered.resolve(self.images.hits);
        }, function (err) {
            defered.reject(err);
        });
        return self.images.pBayPromise;
    }

    return self;
}