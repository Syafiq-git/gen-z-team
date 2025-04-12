document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

(function() {
    function _0xdevToolCheck() {
        var _0xstart = performance.now();
        debugger;
        var _0xend = performance.now();
        if (_0xend - _0xstart > 100) {
            console['clear']();
            alert(atob('RGV2ZWxvcGVyIHRvb2xzIGFyZSBvcGVuIQ==')); // "Developer tools are open!"
            window['location']['href'] = 'about:blank';
        }
    }

    window['onkeydown'] = function(e) {
        if (
            e['keyCode'] === 123 ||
            (e['ctrlKey'] && e['shiftKey'] && (e['keyCode'] === 73 || e['keyCode'] === 74 || e['keyCode'] === 67))
        ) {
            e['preventDefault']();
            alert(atob('TWF1IG5nYXBhaW4gaW5zcGVjdD8ga2FsbyBsdSBpbnNwZWN0IGRpIGd3IGFkYSBub3RpZiBueWEgYm9za3Uh'));
            // "Mau ngapain inspect? kalo lu inspect di gw ada notif nya bosku!"
        }
    };

    document['addEventListener']('contextmenu', function(e) {
        e['preventDefault']();
    });

    setInterval(_0xdevToolCheck, 500);
})();