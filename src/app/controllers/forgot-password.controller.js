const { hostDomain } = require("../config/hostAPI");

exports.ForgotPassword = async (req, res) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer`);
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
      enrollmentno: `${req.body.regdNo}`,
      dob: `${req.body.dob}`,
      usertype: null,
      captcha: {
        captcha: "3pn2h",
        hidden: "YMLQlS0SCbk=",
        image: "test",
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//token/studentpasswordrecover`,
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

exports.changePassword = async (req, res) => {
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
      oldpassword: `${req.body.oldPassword}`,
      newpassword: `${req.body.newPassword}`,
      confirmpassword: `${req.body.newPassword}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${hostDomain}//clxuser/changepassword`,
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
