const dayjs = require("dayjs");

const formatDate = (date, format) => {
    if (!date || !dayjs(date).isValid()) {
        throw new Error("Invalid Date Format");
    }

    const dJs = dayjs(date);

    if (format === "mdyts") { // Sep 20, 2018 10:45:33 PM
        return dJs.format("MMM DD, YYYY hh:mm:ss A");
    }
    if (format === "mdyt") { // Sep 20, 2018 10:45 PM
        return dJs.format("MMM DD, YYYY hh:mm A");
    }
    if (format === "dmy") { // 20 Sep 2018
        return dJs.format("DD MMM YYYY");
    }
    if (format === "d-m-y") { // 20-Sep-2018
        return dJs.format("DD-MMM-YYYY");
    }
    if (format === "dmdyt") { // Thu, Sep 20, 2018 10:45 PM
        return dJs.format("ddd, MMM DD, YYYY hh:mm A");
    }
    if (format === "DM3Yd") { // 21-Sep-18,Fri
        return dJs.format("DD-MMM-YY,ddd");
    }
    if (format === "DM2Yhms") { // 21-09-2018(10.45.53 PM)
        return dJs.format("DD-MM-YYYY (hh.mm.ss A)");
    }
    if (format === "DM3Yhms") { // 21-Sep-2018 10.45.53 PM
        return dJs.format("DD-MMM-YYYY hh.mm.ss A");
    }
    if (format === "DM3Y4d2") { // 21-Sep-2018,Friday
        return dJs.format("DD-MMM-YYYY,dddd");
    }
    if (format === "DM3Ydt") { // 21-Sep-18,Fri 10.45 PM
        return dJs.format("DD-MMM-YY, ddd hh.mm A");
    }
    if (format === "DM3YdtDN") { // 21-Sep-18,Fri 10.45 PM (Day)
        const hours = dJs.get("hour");
        const dayOrNight = (hours >= 6 && hours < 18) ? "Day" : "Night";
        return `${dJs.format("DD-MMM-YY, ddd hh.mm A")} (${dayOrNight})`;
    }
    if (format === "DDMMMYY-hh.mm.ssA") { // 21Sep18-10.45.53PM
        return dJs.format("DDMMMYY-hh.mm.ssA");
    }
    if (format === "yyyy-MM-dd") { // 2021-11-17
        return dJs.format("YYYY-MM-DD");
    }
    if (format === "t-d") { // 21-Sep-2018 10.45.53 PM
        return dJs.format("hh.mm.ss A DD-MMM-YYYY ");
    }
    if (format === "dd-mm-yy") {
        return dJs.format("DD-MM-YY");
    }
    if (format === "hhmmA") { // 21-Sep-18,Fri 10.45 PM
        return dJs.format("hh.mm A");
    }
    return "";
}

module.exports = formatDate;