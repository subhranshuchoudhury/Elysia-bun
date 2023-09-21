const { clientID } = require("../config/client");
const { hostDomain } = require("../config/hostAPI");
const { instituteId } = require("../config/institute");
const { registrationID } = require("../config/registration");
const { registrationCode } = require("../config/registrationcode");

exports.Info = async (req, res) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${req.body.token}`);
    myHeaders.append("Origin", "https://soaportals.com");
    myHeaders.append("Host", "soaportals.com");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "sec-ch-ua",
      '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      clientid: clientID,
      instituteid: instituteId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//studentpersinfo/getstudent-personalinformation`,
      requestOptions
    );

    const data = await response.json();
    res.status = response.status;
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log(error);
    res.status = 500;
    return {
      success: false,
      message: "Server failure",
    };
  }
};

exports.TimeTable = async (req, res) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${req.body.token}`);
    myHeaders.append("Origin", "https://soaportals.com");
    myHeaders.append("Host", "soaportals.com");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "sec-ch-ua",
      '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      registrationid: registrationID,
      instituteid: instituteId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//studentstaffView/getstudent-timetable`,
      requestOptions
    );

    const data = await response.json();
    res.status = response.status;
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log(error);
    res.status = 500;
    return {
      success: false,
      message: "Server failure",
    };
  }
};

exports.getSubjects = async (req, res) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${req.body.token}`);
    myHeaders.append("Origin", "https://soaportals.com");
    myHeaders.append("Host", "soaportals.com");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "sec-ch-ua",
      '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      registrationid: registrationID,
      instituteid: instituteId,
      studentid: `${req.body.regdNo}`,
      registrationcode: `${req.body.regdCode || registrationCode}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//reqsubfaculty/getSubject`,
      requestOptions
    );

    const data = await response.json();
    res.status = response.status;
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log(error);
    res.status = 500;
    return {
      success: false,
      message: "Server failure",
    };
  }
};

exports.getRegCode = async (req, res) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${req.body.token}`);
    myHeaders.append("Origin", "https://soaportals.com");
    myHeaders.append("Host", "soaportals.com");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "sec-ch-ua",
      '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      instituteid: instituteId,
      memberid: null,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//studentstaffView/getRegCode`,
      requestOptions
    );

    const data = await response.json();
    res.status = response.status;
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.log(error);
    res.status = 500;
    return {
      success: false,
      message: "Server failure",
    };
  }
};
