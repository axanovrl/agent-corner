import React from "react";
import { Container } from "react-bootstrap";

const privacyPolicyForm = () => {
  return (
    <Container>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">
          Privacy Policy for Agent Corner
        </span>
      </div>
      <p className="privacy-pol">
        At acorner.herokuapp.com, accessible from https://acorner.herokuapp.com,
        one of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by acorner.herokuapp.com and how we use it. If you have
        additional questions or require more information about our Privacy
        Policy, do not hesitate to contact us through email at
        acmain@acorner.com
      </p>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">Log Files</span>
      </div>
      <p className="privacy-pol">
        acorner.herokuapp.com follows a standard procedure of using log files.
        These files log visitors when they visit websites. All hosting companies
        do this and a part of hosting services&apos; analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users&apos; movement on the website, and gathering demographic
        information.
      </p>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">Privacy Policies</span>
      </div>
      <p className="privacy-pol">
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of acorner.herokuapp.com. Our Privacy Policy was
        created with the help of the Privacy Policy Generator. Third-party ad
        servers or ad networks uses technologies like cookies, JavaScript, or
        Web Beacons that are used in their respective advertisements and links
        that appear on acorner.herokuapp.com, which are sent directly to
        users&apos; browser. They automatically receive your IP address when
        this occurs. These technologies are used to measure the effectiveness of
        their advertising campaigns and/or to personalize the advertising
        content that you see on websites that you visit. Note that
        acorner.herokuapp.com has no access to or control over these cookies
        that are used by third-party advertisers.
      </p>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">
          Third Party Privacy Policies
        </span>
      </div>
      <p className="privacy-pol">
        acorner.herokuapp.com&apos;s Privacy Policy does not apply to other
        advertisers or websites. Thus, we are advising you to consult the
        respective Privacy Policies of these third-party ad servers for more
        detailed information. It may include their practices and instructions
        about how to opt-out of certain options. You may find a complete list of
        these Privacy Policies and their links here: Privacy Policy Links. You
        can choose to disable cookies through your individual browser options.
        To know more detailed information about cookie management with specific
        web browsers, it can be found at the browsers&apos; respective websites.
        What Are Cookies?
      </p>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">
          Online Privacy Policy Only
        </span>
      </div>
      <p className="privacy-pol">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in acorner.herokuapp.com. This policy is not
        applicable to any information collected offline or via channels other
        than this website.
      </p>
      <div className="d-flex mb-1">
        <span className="font-weight-bold ac-text-title">Consent</span>
      </div>
      <p className="privacy-pol">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </Container>
  );
};

export default privacyPolicyForm;
