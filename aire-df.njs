// aire-df.njs

result = {};
var renglones = $('table.td_tabla_difusion').find('tr');
mediciones = [];

renglones.each(function(index) {

    var primero = $(this).children(0).text();

    if(primero.search('Fecha') != -1 || primero.search('diarios') != -1) {
        return true;
    }

    mediciones.push({    
        fecha: $(this).children(0).text(),
        ACO: $(this).children(1).text(),
        AJU: $(this).children(2).text(),
        ARA: $(this).children(3).text(),
        ATI: $(this).children(4).text(),
        AZC: $(this).children(5).text(),
        CAM: $(this).children(6).text(),
        CES: $(this).children(7).text(),
        CHA: $(this).children(8).text(),
        CHO: $(this).children(9).text(),
        COY: $(this).children(10).text(),
        CUA: $(this).children(11).text(),
        CUT: $(this).children(12).text(),
        FAC: $(this).children(13).text(),
        HGM: $(this).children(14).text(),
        IMP: $(this).children(15).text(),
        IZT: $(this).children(16).text(),
        LAG: $(this).children(17).text(),
        LLA: $(this).children(18).text(),
        LPR: $(this).children(19).text(),
        MER: $(this).children(20).text(),
        NEZ: $(this).children(21).text(),
        PED: $(this).children(22).text(),
        PLA: $(this).children(23).text(),
        SAG: $(this).children(24).text(),
        SFE: $(this).children(25).text(),
        SJA: $(this).children(26).text(),
        SUR: $(this).children(27).text(),
        TAC: $(this).children(28).text(),
        TAH: $(this).children(29).text(),
        TAX: $(this).children(30).text(),
        TEC: $(this).children(31).text(),
        TLA: $(this).children(32).text(),
        TLI: $(this).children(33).text(),
        TPN: $(this).children(34).text(),
        UAX: $(this).children(35).text(),
        UIZ: $(this).children(36).text(),
        VAL: $(this).children(37).text(),
        VIF: $(this).children(38).text(),
        XAL: $(this).children(39).text(),
        CCA: $(this).children(40).text()
    });
});

result.mediciones = mediciones;
