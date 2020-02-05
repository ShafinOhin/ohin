
document.getElementById("rhidoy").value = 0;
document.getElementById("ali").value = 0
document.getElementById("ohin").value = 0;
document.getElementById("faisal").value = 0;
document.getElementById("nagib").value = 0;
document.getElementById("mahin").value = 0;
document.getElementById("sadik").value = 0;
document.getElementById("bagchi").value = 0;
document.getElementById("jilan").value = 0;
document.getElementById("shouvik").value = 0;
document.getElementById("hujur").value = 0;

function pos(x){
    if(x<0) return 0;
    else return x;
}

document.getElementById("calculate").onclick = function() {
    let rhidoy = pos(Number(document.getElementById("rhidoy").value) - 2.5);
    let ali = pos(Number(document.getElementById("ali").value) - 2.5);
    let ohin = pos(Number(document.getElementById("ohin").value) - 2.5);
    let faisal = pos(Number(document.getElementById("faisal").value) - 2.5);
    let nagib = pos(Number(document.getElementById("nagib").value) - 2.5);
    let mahin = pos(Number(document.getElementById("mahin").value) - 2.5);
    let sadik = pos(Number(document.getElementById("sadik").value) - 2.5);
    let bagchi = pos(Number(document.getElementById("bagchi").value) - 2.5);
    let jilan = pos(Number(document.getElementById("jilan").value) - 2.5);
    let shouvik = pos(Number(document.getElementById("shouvik").value) - 2.5);
    let hujur = pos(Number(document.getElementById("hujur").value) - 2.5);

    let totalCost = Number(document.getElementById("totalCost").value);
    let totalCG = rhidoy + ali + ohin + faisal + nagib + mahin + sadik + bagchi + jilan + shouvik + hujur;
    
    rc = totalCost * (rhidoy/totalCG);
    ac = totalCost * (ali/totalCG);
    oc = totalCost * (ohin/totalCG);
    fc = totalCost * (faisal/totalCG);
    nc = totalCost * (nagib/totalCG);
    mc = totalCost * (mahin/totalCG);
    sc = totalCost * (sadik/totalCG);
    bc = totalCost * (bagchi/totalCG);
    jc = totalCost * (jilan/totalCG);
    shc = totalCost * (shouvik/totalCG);
    hc = totalCost * (hujur/totalCG);

    if(totalCG == 0){
        rc = ac = oc = fc = nc = mc = sc = bc = jc = shc = hc = (totalCost/11);
    }

    document.getElementById("rhidoy_a").innerHTML = rc.toFixed(0).toString() + " /=";
    document.getElementById("ali_a").innerHTML = ac.toFixed(0).toString() + " /=";
    document.getElementById("ohin_a").innerHTML = oc.toFixed(0).toString() + " /=";
    document.getElementById("sadik_a").innerHTML = sc.toFixed(0).toString() + " /=";
    document.getElementById("bagchi_a").innerHTML = bc.toFixed(0).toString() + " /=";
    document.getElementById("shouvik_a").innerHTML = shc.toFixed(0).toString() + " /=";
    document.getElementById("hujur_a").innerHTML = hc.toFixed(0).toString() + " /=";
    document.getElementById("nagib_a").innerHTML = nc.toFixed(0).toString() + " /=";
    document.getElementById("faisal_a").innerHTML = fc.toFixed(0).toString() + " /=";
    document.getElementById("jilan_a").innerHTML = jc.toFixed(0).toString() + " /=";
    document.getElementById("mahin_a").innerHTML = mc.toFixed(0).toString() + " /=";



    
}