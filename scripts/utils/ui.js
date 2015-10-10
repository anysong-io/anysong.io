define(function(require) {
    var log = require("loglevel");
    var $ = require("jquery");
    log.setLevel("info");

    var selector = {
        examples: "#examples",
        examplesLinks: ".example",
        searchForm: "#search-form",
        searchInput: "#search-input",
        searchLabel: "#search-label",
        playerTitle: "#player-title",
        player: "#player"
    };

    $(document).ready(function() {
        $(selector.examplesLinks).on("click", function() {
            $(selector.searchInput).val($(this).html());
            $(selector.searchForm).submit();
        })
    });

    function showPlayer() {
        log.trace("showPlayer", arguments);

        $(selector.examples).hide();
        $(selector.player).fadeIn();
    }

    function setPlayerTitle(title) {
        log.trace("setPlayerTitle", arguments);

        $(selector.playerTitle)
            .html(title)
            .attr("title", title);
    }

    function onSearch(fn) {
        $(selector.searchForm).on("submit", function(e) {
            var val = $(selector.searchInput).val();
            fn(val, e);
            return false;
        })
    }

    /**
     * Add an error message to the search box
     * @param label
     */
    function displaySearchError(label) {
        log.trace("displaySearchError", arguments);

        var $searchInput = $(selector.searchInput),
            $searchLabel = $(selector.searchLabel);

        $searchInput.addClass("ui-error");
        $searchLabel.html(label);

        setTimeout(function() {
            $searchInput.removeClass("ui-error");
            $searchLabel.html("");
        }, 1000);
    }

    return {
        selector: selector,
        setPlayerTitle: setPlayerTitle,
        showPlayer: showPlayer,
        onSearch: onSearch,
        displaySearchError: displaySearchError
    }
});