let Singleton = (function () {
    let uniqueInstance;

    function constructor() {
    }

    return {
        getInstance : function () {
            if (!uniqueInstance) {
                uniqueInstance = constructor();
            }

            return uniqueInstance;
        }
    }
})();