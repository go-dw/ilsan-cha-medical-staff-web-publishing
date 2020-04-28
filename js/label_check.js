function savedLong(a) {
	var nvlong = $("login_chk");
	var label_nvlong = $("label_login_chk");
	if (a.checked == true) {
		nvlong.value='on';
		try{
		label_nvlong.className="sp on";
		}catch(e){}
		ipCheckOff();
	}
	else
	{
		nvlong.value='off';
		try{
		label_nvlong.className="sp";
		}catch(e){}
	}
}
function ipCheckOff() {
	var label_check = $("label_ip_on");
	var check = $("ip_on");
	if (check != null) {
		check.checked = false;
		label_check.className="sp";
	}
	setSmartLevel(-1);
}
function ipCheckOn(level) {
	var label_check = $("label_ip_on");
	var check = $("ip_on");
	if (check != null) {
		check.checked = true;
		label_check.className="sp on";
	}
	setSmartLevel(level);
}

function savedLong(a) {
	var nvlong = $("login_rd");
	var label_nvlong = $("label_login_rd");
	if (a.checked == true) {
		nvlong.value='on';
		try{
		label_nvlong.className="rp on";
		}catch(e){}
		ipCheckOff();
	}
	else
	{
		nvlong.value='off';
		try{
		label_nvlong.className="rp";
		}catch(e){}
	}
}
function ipCheckOff() {
	var label_check = $("label_ip_on");
	var check = $("ip_on");
	if (check != null) {
		check.checked = false;
		label_check.className="sp";
	}
	setSmartLevel(-1);
}
function ipCheckOn(level) {
	var label_check = $("label_ip_on");
	var check = $("ip_on");
	if (check != null) {
		check.checked = true;
		label_check.className="rp on";
	}
	setSmartLevel(level);
}