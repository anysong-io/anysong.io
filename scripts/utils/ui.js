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

    function setPlayerTitle(title, downloadLink) {
        log.trace("setPlayerTitle", arguments);

        var $download = "<a href='" + downloadLink + "' class='download-link icon-arrow-down'></a>&nbsp;&nbsp;";

        $(selector.playerTitle)
            .attr("title", title)
            .html($download + title);
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
        $searchLabel.html(label).slideDown();

        setTimeout(function() {
            $searchInput.removeClass("ui-error");
            $searchLabel.slideUp();
        }, 3000);
    }

    return {
        selector: selector,
        setPlayerTitle: setPlayerTitle,
        showPlayer: showPlayer,
        onSearch: onSearch,
        displaySearchError: displaySearchError
    }
});