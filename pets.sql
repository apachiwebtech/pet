-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 07:11 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pets`
--

-- --------------------------------------------------------

--
-- Table structure for table `awt_adminuser`
--

CREATE TABLE `awt_adminuser` (
  `id` int(11) NOT NULL,
  `firstname` varchar(15) DEFAULT NULL,
  `lastname` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `otp` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_adminuser`
--

INSERT INTO `awt_adminuser` (`id`, `firstname`, `lastname`, `email`, `mobile`, `role`, `address`, `username`, `password`, `created_date`, `updated_date`, `created_by`, `updated_by`, `deleted`, `otp`) VALUES
(2, 'Akash ', 'Sagvekar', 'akash@apachiweb.co.in', '9619353074', 1, 'Jogeshwari (East)', 'akash@apachiweb.co.in', 'e10adc3949ba59abbe56e057f20f883e', '2023-09-11 11:55:17', '2021-04-02 12:07:43', 0, 0, 0, 0),
(18, 'Rehan', 'Ansari', 'rehan@gmail.com', '1234567890', 1, '', 'rehan@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-10-24 14:51:16', NULL, 0, 0, 1, 0),
(19, 'Test', 'Test', 'test@gmail.com', '9898989898', 6, 'Test', 'test@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '2023-09-21 11:32:21', NULL, 0, 0, 1, 0),
(20, 'Rajshree', 'Choudhury', 'raagasilktales@gmail.com', '8080907770', 1, '', 'raagasilktales@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '2023-10-20 17:07:06', NULL, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_contact_info`
--

CREATE TABLE `awt_contact_info` (
  `id` int(11) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `faxno` varchar(15) NOT NULL,
  `gstno` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `created_date` datetime NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `awt_dashboard`
--

CREATE TABLE `awt_dashboard` (
  `id` int(11) NOT NULL,
  `title` varchar(150) DEFAULT NULL,
  `link` varchar(150) DEFAULT NULL,
  `icon` varchar(150) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) DEFAULT 0,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `otp` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_dashboard`
--

INSERT INTO `awt_dashboard` (`id`, `title`, `link`, `icon`, `type`, `status`, `created_date`, `updated_date`, `created_by`, `updated_by`, `deleted`, `otp`) VALUES
(3, 'My Pet', 'pet', '1702456975-home.png', 1, '1', '2023-12-13 14:12:55', '2023-12-13 15:35:39', 1, 1, 0, 0),
(4, 'Community', 'community', '1702457144-home.png', 1, '1', '2023-12-13 14:15:44', '2023-12-13 15:31:11', 1, 1, 0, 0),
(5, 'Vet', 'vet', '1702457162-home.png', 1, '1', '2023-12-13 14:16:02', '2023-12-13 15:31:29', 1, 1, 0, 0),
(6, 'Groomers', 'groomers', '1702457184-home.png', 1, '1', '2023-12-13 14:16:24', '2023-12-13 15:31:49', 1, 1, 0, 0),
(7, 'Walkers', 'walkers', '1702457236-home.png', 1, '1', '2023-12-13 14:17:16', '2023-12-13 15:32:05', 1, 1, 0, 0),
(8, 'Boarders', 'boarders', '1702457337-home.png', 1, '1', '2023-12-13 14:18:57', '2023-12-13 15:32:24', 1, 1, 0, 0),
(9, 'Trainers', 'trainers', '1702457359-home.png', 1, '1', '2023-12-13 14:19:19', '2023-12-13 15:32:40', 1, 1, 0, 0),
(10, 'Pet Stores', 'petstores', '1702457383-home.png', 1, '1', '2023-12-13 14:19:43', '2023-12-13 15:33:01', 1, 1, 0, 0),
(11, 'Fresh Meat', 'freshmeat', '1702457486-home.png', 1, '1', '2023-12-13 14:21:26', '2023-12-13 15:33:21', 1, 1, 0, 0),
(12, 'Play Areas', 'playareas', '1702457513-home.png', 1, '1', '2023-12-13 14:21:53', '2023-12-13 15:34:20', 1, 1, 0, 0),
(13, 'Adoption', 'adoption', '1702461980-home.png', 2, '1', '2023-12-13 15:36:20', NULL, 1, 0, 0, 0),
(14, 'Lost & Found', 'lost', '1702462011-home.png', 1, '1', '2023-12-13 15:36:51', NULL, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_faq`
--

CREATE TABLE `awt_faq` (
  `id` int(11) NOT NULL,
  `question` varchar(150) NOT NULL,
  `answer` text NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) NOT NULL DEFAULT 0,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `awt_other_pages`
--

CREATE TABLE `awt_other_pages` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) NOT NULL DEFAULT 0,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_other_pages`
--

INSERT INTO `awt_other_pages` (`id`, `title`, `description`, `created_date`, `updated_date`, `created_by`, `updated_by`, `deleted`) VALUES
(1, 'Terms & Conditions', '<h1>Terms and Conditions</h1>\r\n\r\n<p>Welcome to Raaga Silk Tales!</p>\r\n\r\n<p>These terms and conditions outline the rules and regulations for the use of Raaga Silk Tales Website, located at https://raagasilktales.com/.</p>\r\n\r\n<p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Raaga Silk Tales if you do not agree to take all of the terms and conditions stated on this page.</p>\r\n\r\n<p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&#39;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&#39;s needs in respect of provision of the Company&#39;s stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>\r\n\r\n<h3>Cookies</h3>\r\n\r\n<p>We employ the use of cookies. By accessing Raaga Silk Tales, you agreed to use cookies in agreement with the Raaga Silk Tales&nbsp;Privacy Policy.</p>\r\n\r\n<p>Most interactive websites use cookies to let us retrieve the user&#39;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>\r\n\r\n<h3>License</h3>\r\n\r\n<p>Unless otherwise stated, Raaga Silk Tales and/or its licensors own the intellectual property rights for all material on Raaga Silk Tales. All intellectual property rights are reserved. You may access this from Raaga Silk Tales for your own personal use subjected to restrictions set in these terms and conditions.</p>\r\n\r\n<p>You must not:</p>\r\n\r\n<ul>\r\n	<li>Republish material from Raaga Silk Tales</li>\r\n	<li>Sell, rent or sub-license material from Raaga Silk Tales</li>\r\n	<li>Reproduce, duplicate or copy material from Raaga Silk Tales</li>\r\n	<li>Redistribute content from Raaga Silk Tales</li>\r\n</ul>\r\n\r\n<p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Raaga Silk Tales does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Raaga Silk Tales,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Raaga Silk Tales shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>\r\n\r\n<p>Raaga Silk Tales reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>\r\n\r\n<p>You warrant and represent that:</p>\r\n\r\n<ul>\r\n	<li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>\r\n	<li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>\r\n	<li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>\r\n	<li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>\r\n</ul>\r\n\r\n<p>You hereby grant Raaga Silk Tales a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>\r\n\r\n<h3>Hyperlinking to our Content</h3>\r\n\r\n<p>The following organizations may link to our Website without prior written approval:</p>\r\n\r\n<ul>\r\n	<li>Government agencies;</li>\r\n	<li>Search engines;</li>\r\n	<li>News organizations;</li>\r\n	<li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>\r\n	<li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>\r\n</ul>\r\n\r\n<p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party&#39;s site.</p>\r\n\r\n<p>We may consider and approve other link requests from the following types of organizations:</p>\r\n\r\n<ul>\r\n	<li>commonly-known consumer and/or business information sources;</li>\r\n	<li>dot.com community sites;</li>\r\n	<li>associations or other groups representing charities;</li>\r\n	<li>online directory distributors;</li>\r\n	<li>internet portals;</li>\r\n	<li>accounting, law and consulting firms; and</li>\r\n	<li>educational institutions and trade associations.</li>\r\n</ul>\r\n\r\n<p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Raaga Silk Tales; and (d) the link is in the context of general resource information.</p>\r\n\r\n<p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party&#39;s site.</p>\r\n\r\n<p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Raaga Silk Tales. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>\r\n\r\n<p>Approved organizations may hyperlink to our Website as follows:</p>\r\n\r\n<ul>\r\n	<li>By use of our corporate name; or</li>\r\n	<li>By use of the uniform resource locator being linked to; or</li>\r\n	<li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&#39;s site.</li>\r\n</ul>\r\n\r\n<p>No use of Raaga Silk Tales logo or other artwork will be allowed for linking absent a trademark license agreement.</p>\r\n\r\n<h3>iFrames</h3>\r\n\r\n<p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>\r\n\r\n<h3>Content Liability</h3>\r\n\r\n<p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>\r\n\r\n<h3>Reservation of Rights</h3>\r\n\r\n<p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it&#39;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>\r\n\r\n<h3>Removal of links from our website</h3>\r\n\r\n<p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>\r\n\r\n<p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>\r\n\r\n<h3>Disclaimer</h3>\r\n\r\n<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>\r\n\r\n<ul>\r\n	<li>limit or exclude our or your liability for death or personal injury;</li>\r\n	<li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\r\n	<li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\r\n	<li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\r\n</ul>\r\n\r\n<p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>\r\n\r\n<p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>\r\n', '0000-00-00 00:00:00', '2023-10-05 12:30:27', 0, 1, 0),
(2, 'Privacy Policy', '<h1>Privacy Policy</h1>\r\n\r\n<p>At Raaga Silk Tales, accessible from https://raagasilktales.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Raaga Silk Tales and how we use it.</p>\r\n\r\n<p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>\r\n\r\n<p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Raaga Silk Tales. This policy is not applicable to any information collected offline or via channels other than this website.</p>\r\n\r\n<h2>Consent</h2>\r\n\r\n<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\r\n\r\n<h2>Information we collect</h2>\r\n\r\n<p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>\r\n\r\n<p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>\r\n\r\n<p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>\r\n\r\n<h2>How we use your information</h2>\r\n\r\n<p>We use the information we collect in various ways, including to:</p>\r\n\r\n<ul>\r\n	<li>Provide, operate, and maintain our website</li>\r\n	<li>Improve, personalize, and expand our website</li>\r\n	<li>Understand and analyze how you use our website</li>\r\n	<li>Develop new products, services, features, and functionality</li>\r\n	<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>\r\n	<li>Send you emails</li>\r\n	<li>Find and prevent fraud</li>\r\n</ul>\r\n\r\n<h2>Log Files</h2>\r\n\r\n<p>Raaga Silk Tales follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&#39; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&#39; movement on the website, and gathering demographic information.</p>\r\n\r\n<h2>Cookies and Web Beacons</h2>\r\n\r\n<p>Like any other website, Raaga Silk Tales uses &quot;cookies&quot;. These cookies are used to store information including visitors&#39; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&#39; experience by customizing our web page content based on visitors&#39; browser type and/or other information.</p>\r\n\r\n<h2>Advertising Partners Privacy Policies</h2>\r\n\r\n<p>You may consult this list to find the Privacy Policy for each of the advertising partners of Raaga Silk Tales.</p>\r\n\r\n<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Raaga Silk Tales, which are sent directly to users&#39; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>\r\n\r\n<p>Note that Raaga Silk Tales has no access to or control over these cookies that are used by third-party advertisers.</p>\r\n\r\n<h2>Third Party Privacy Policies</h2>\r\n\r\n<p>Raaga Silk Tales&#39;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>\r\n\r\n<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&#39; respective websites.</p>\r\n\r\n<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\r\n\r\n<p>Under the CCPA, among other rights, California consumers have the right to:</p>\r\n\r\n<p>Request that a business that collects a consumer&#39;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\r\n\r\n<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\r\n\r\n<p>Request that a business that sells a consumer&#39;s personal data, not sell the consumer&#39;s personal data.</p>\r\n\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n\r\n<h2>GDPR Data Protection Rights</h2>\r\n\r\n<p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>\r\n\r\n<p>The right to access &ndash; You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>\r\n\r\n<p>The right to rectification &ndash; You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>\r\n\r\n<p>The right to erasure &ndash; You have the right to request that we erase your personal data, under certain conditions.</p>\r\n\r\n<p>The right to restrict processing &ndash; You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>\r\n\r\n<p>The right to object to processing &ndash; You have the right to object to our processing of your personal data, under certain conditions.</p>\r\n\r\n<p>The right to data portability &ndash; You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>\r\n\r\n<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\r\n\r\n<h2>Contact Us</h2>\r\n\r\n<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>\r\n', '0000-00-00 00:00:00', '2023-10-05 12:31:04', 0, 1, 0),
(3, 'Disclaimer', '<h1>Disclaimer</h1>\r\n\r\n<p>Welcome to Raaga Silk Tales, where we strive to provide you with the finest collection of sarees. Before you shop with us, please take a moment to read and understand the following terms and conditions:</p>\r\n\r\n<p>1. Product Information:<br />\r\n&nbsp; &nbsp;- Colors and patterns of sarees may vary slightly due to screen settings and photography lighting.<br />\r\n&nbsp; &nbsp;- Product descriptions and prices are subject to change without prior notice.</p>\r\n\r\n<p>2. Orders and Payments:<br />\r\n&nbsp; &nbsp;- All orders are subject to availability.<br />\r\n&nbsp; &nbsp;- We accept various payment methods, and your transaction details are secure and confidential.</p>\r\n\r\n<p>3. Shipping and Delivery:<br />\r\n&nbsp; &nbsp;- We aim to deliver your orders within the estimated time frame. However, delays due to unforeseen circumstances may occur.<br />\r\n&nbsp; &nbsp;- Shipping charges may apply, and you will be notified of these charges before finalizing your purchase.</p>\r\n\r\n<p>4. Returns and Exchanges:<br />\r\n&nbsp; &nbsp;- We accept returns and exchanges within 5-7 days of the delivery date.<br />\r\n&nbsp; &nbsp;- Returned sarees must be unused, unwashed, and in their original packaging with tags intact.<br />\r\n&nbsp; &nbsp;- Refunds and exchanges are subject to inspection and approval.</p>\r\n\r\n<p>5. Privacy and Security:<br />\r\n&nbsp; &nbsp;- We value your privacy and take security measures to protect your personal information.<br />\r\n&nbsp; &nbsp;- Your data will not be shared with third parties without your consent, as detailed in our Privacy Policy.</p>\r\n\r\n<p>6. Disclaimer of Liability:&nbsp;<br />\r\n&nbsp; &nbsp;- Raaga Silk Tales shall not be responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our products or services.</p>\r\n\r\n<p>7. Intellectual Property:<br />\r\n&nbsp; &nbsp;- All content, images, and designs on our website are protected by copyright and intellectual property laws.</p>\r\n\r\n<p>8. Contact Information:<br />\r\n&nbsp; &nbsp;- If you have any questions or concerns, please contact our customer support team at info@raagasilktales.com.</p>\r\n\r\n<p>By using our website and purchasing our products, you agree to abide by these terms and conditions. We reserve the right to update or modify these terms as needed. Please check this page regularly for any changes.</p>\r\n\r\n<p>Thank you for shopping with us! We hope you have a delightful saree shopping experience.</p>\r\n', '0000-00-00 00:00:00', '2023-10-05 12:39:42', 0, 1, 0),
(4, 'Return & Exchange Policy', '<h1>Return and Refund Policy</h1>\r\n\r\n<p>The following terms are applicable for any products that You purchased with Us.</p>\r\n\r\n<h3>Definitions</h3>\r\n\r\n<p>For the purposes of this Return and Refund Policy:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p><strong>Products</strong>&nbsp;refer to the items offered for sale on the Service.</p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Orders</strong>&nbsp;mean a request by You to purchase <strong>Products&nbsp;</strong>from Us.</p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Service</strong>&nbsp;refers to the Website.</p>\r\n	</li>\r\n	<li>\r\n	<p><strong>Website</strong>&nbsp;refers to Raaga Silk Tales, accessible from&nbsp;<a href=\"https://raagasilktales.com\" rel=\"external nofollow noopener\" target=\"_blank\">https://raagasilktales.com/</a></p>\r\n	</li>\r\n	<li>\r\n	<p><strong>You</strong>&nbsp;means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>\r\n	</li>\r\n</ul>\r\n\r\n<h2>Your Order Cancellation Rights</h2>\r\n\r\n<p>You are entitled to cancel Your Order within 24 hours&nbsp;without giving any reason for doing so.&nbsp;</p>\r\n\r\n<p>We gladly accept any cancellations within 24 hours of purchase . We will initiate the refund within 2&nbsp;working day for cancellations made within 24 hours . The return amount in your account will be deposited as per the policies of the payment gateways that you chose to pay us with.&nbsp;We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>\r\n\r\n<p>Please note that it may take 3-4 working days for the amount to reflect in your statement depending upon the payment gateway provider policies.&nbsp;</p>\r\n\r\n<p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p>By email:&nbsp;<a href=\"mailto:info@raagasilktales.com\">info@raagasilktales.com</a></p>\r\n	</li>\r\n	<li>\r\n	<p>By phone number:<a href=\"tel: +91- 8080907770\"> +91- 8080907770</a></p>\r\n	</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h2>Conditions for Returns</h2>\r\n\r\n<p>Before you decide to return, please understand that slight imperfections are inherent to the handloom process . They are all unique and distinct products. We also cross check each product thoroughly before we send them, so it is unlikely that you will receive a defective product.&nbsp;We stand behind our products. But in case you decide to return, we will gladly accept the returns if they meet the following conditions.&nbsp;</p>\r\n\r\n<p>In order for the Products to be eligible for a return, please make sure that:</p>\r\n\r\n<ul>\r\n	<li>The Products were purchased in the last 14 days&nbsp;and we need to have the merchandise reach us within 10 days from the return date for us to initiate refund.&nbsp;</li>\r\n	<li>The Products are in the original packaging, unworn or unused, with tags, and in its original packaging. We&rsquo;ll also need the receipt or proof of purchase.We cannot refund without cross checking the product&nbsp;in question as these are all unique handloom pieces&nbsp;and we cannot / will not accept back any damaged or worn products.&nbsp;Items sent back to us without first requesting a return will not be accepted.&nbsp;</li>\r\n</ul>\r\n\r\n<p>The following Goods cannot be returned:</p>\r\n\r\n<ul>\r\n	<li>The supply of Products made to Your specifications or clearly personalized.</li>\r\n	<li>The supply of Products which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>\r\n	<li>The supply of Products which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>\r\n	<li>The supply of Products which are, after delivery, according to their nature, inseparably mixed with other items.</li>\r\n</ul>\r\n\r\n<p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>\r\n\r\n<p>Only regular priced Products may be refunded. Unfortunately, Products on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>\r\n\r\n<h2>Returning Products</h2>\r\n\r\n<p>You are responsible for the cost and risk of returning the Products to Us. You should send the Products at the following address:</p>\r\n\r\n<p>Raaga Silk Tales : 8/65 CCI Colony, Unnat Nagar - 4, M.G Road, Goregaon (West) Mumbai - 400104</p>\r\n\r\n<p>We cannot be held responsible for Products damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Products or proof of received return delivery.</p>\r\n\r\n<h2>Contact Us</h2>\r\n\r\n<p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>\r\n\r\n<ul>\r\n	<li>\r\n	<p>By email:&nbsp;<a href=\"https://raagasilktales.com/privacy-policy.php#\">info@raagasilktales.com</a></p>\r\n	</li>\r\n	<li>\r\n	<p>By phone number: +91- <a href=\"tel:  8080907770\">8080907770</a></p>\r\n	</li>\r\n</ul>\r\n', '0000-00-00 00:00:00', '2023-11-04 11:21:26', 0, 1, 0),
(5, 'Shipping Policy', '<ul>\r\n	<li>Customers are requested to provide an accurate, complete and valid address and pin code at the time of creating an account to avoid any delays, as we would not be liable if any incorrect address is provided and no refunds may be claimed by the buyer for any delay in delivery of the Products, which was caused due to reasons beyond our control.</li>\r\n</ul>\r\n', '2021-03-05 17:03:40', '2023-01-30 10:02:23', 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_pages`
--

CREATE TABLE `awt_pages` (
  `id` int(11) NOT NULL,
  `pagename` text DEFAULT NULL,
  `seo_title` text DEFAULT NULL,
  `seo_keyword` text DEFAULT NULL,
  `seo_desc` text DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `breadimage` text DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) NOT NULL DEFAULT 0,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_pages`
--

INSERT INTO `awt_pages` (`id`, `pagename`, `seo_title`, `seo_keyword`, `seo_desc`, `title`, `description`, `breadimage`, `created_date`, `updated_date`, `created_by`, `updated_by`, `deleted`) VALUES
(1, 'Home Page', 'Handwoven Sarees Direct from the Loom | Manufacturing & Online Sale', '', 'Shop now for authentic handwoven sarees that celebrate tradition and style. Experience the joy of owning a masterpiece that embodies the rich heritage of India.', NULL, NULL, NULL, '2021-12-12 17:02:40', '2023-06-17 00:59:39', 0, 1, 0),
(2, 'Product Listing Page', 'Shop the Latest Collection of Sarees Online | Best Deals and Wide Selection', '', 'Browse and shop the latest collection of sarees online, featuring the best deals and a wide selection to suit every style.', NULL, NULL, NULL, '2022-12-09 17:51:11', '2023-06-17 01:14:04', 0, 1, 0),
(3, 'Product Detail Page', 'Product Detail ', NULL, 'Mariyam Handloom', NULL, NULL, NULL, '2022-12-09 17:51:11', '2022-12-09 17:51:11', 0, 0, 0),
(4, 'Cart Page', 'Securely Shop and Review Your Selections', '', '\r\nWelcome to your secure cart page! Here, you can conveniently review and finalize your selections before making a purchase.', NULL, NULL, NULL, '2022-12-09 17:51:11', '2023-06-17 01:23:47', 0, 1, 0),
(5, 'Checkout Page', 'Checkout: Securely Complete Your Purchase', '', 'Welcome to our secure checkout page! Complete your purchase with peace of mind, knowing that your transaction is safe and secure.', NULL, NULL, NULL, '2022-12-09 17:51:11', '2023-06-17 01:25:20', 0, 1, 0),
(6, 'Thank You Page', 'Thank You for Your Saree Purchase', '', 'Thank you for choosing us for your saree purchase! We appreciate your trust in our products and services.', NULL, NULL, NULL, '2022-12-09 17:51:11', '2023-06-17 01:26:29', 0, 1, 0),
(7, 'Search Page', 'Search and Discover Stunning Sarees Online', '', 'Explore a wide variety of stunning sarees online and find your perfect match. Discover exquisite designs, vibrant colors, and premium fabrics.', NULL, NULL, NULL, '2022-12-10 05:44:35', '2023-06-17 01:28:04', 0, 1, 0),
(8, 'My Profile Page', 'My Profile: Manage and Personalize Your Account Information', '', 'Take control of your online experience with our \"My Profile\" feature. Manage and personalize your account information according to your preferences. ', NULL, NULL, NULL, '2022-12-10 05:44:35', '2023-06-17 01:42:30', 0, 1, 0),
(9, 'My Address Page', 'My Shipping Address: Update and Manage Your Delivery Information', '', 'Manage and update your shipping address effortlessly with our \"My Shipping Address\" feature.', NULL, NULL, NULL, '2022-12-10 05:44:35', '2023-06-17 01:41:48', 0, 1, 0),
(10, 'My Orders Page', 'My Orders: View and Track Your Purchase', '', 'Access and track your purchase history with ease through our \"My Orders\" feature. Stay informed about the status of your orders, from confirmation to delivery.', NULL, NULL, NULL, '2022-12-10 05:44:35', '2023-06-17 01:40:34', 0, 1, 0),
(11, 'My Wislist Page', 'My Wishlist: Save and Organize Your Favorite Products', '', 'Create and manage your personalized Wishlist on our website. Save and organize your favorite products all in one place for easy access and future reference.', NULL, NULL, NULL, '2022-12-10 05:44:35', '2023-06-17 01:39:44', 0, 1, 0),
(12, 'Order Tracking Page', 'Order Tracking: Track Your Package and Delivery Status', '', 'Track the status of your package and stay updated on the delivery progress with our Order Tracking service.', NULL, NULL, NULL, '2022-12-10 06:00:42', '2023-06-17 01:38:57', 0, 1, 0),
(13, 'About Us Page', 'About Us: Discover Our Story and Mission', '', 'Welcome to our About Us page! Explore and discover our story, mission, and what sets us apart. Learn about our commitment to providing high-quality products.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:37:59', 0, 1, 0),
(14, 'Contact Us Page', 'Contact Us: Get in Touch for Assistance', '', 'Need assistance? Our Contact Us page is your gateway to getting in touch with us. Whether you have questions, feedback, or require support, we\'re here to help.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:36:23', 0, 1, 0),
(15, 'Shipping Policy Page', 'Shipping Policy: Fast and Reliable Delivery', '', 'Our Shipping Policy ensures fast and reliable delivery of your orders. We strive to provide a seamless shipping experience, delivering your products to your doo', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:35:34', 0, 1, 0),
(16, 'Privacy Policy Page', 'Privacy Policy: Safeguarding Your Personal Information', '', 'Our Privacy Policy is designed to protect and safeguard your personal information when you visit and use our website.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:34:18', 0, 1, 0),
(17, 'Return & Exchange Policy Page', 'Return & Exchange Policy: Hassle-Free Returns and Exchanges', '', 'Our Return & Exchange Policy ensures a hassle-free experience for returns and exchanges of products purchased from our website.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:33:20', 0, 1, 0),
(18, 'Terms & Conditions Page', 'Terms and Conditions: Agreement for Website Usage', '', 'Our Terms and Conditions outline the agreement for using our website. By accessing and using our website, you agree to abide by these terms.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:32:19', 0, 1, 0),
(19, 'Disclaimer Page', 'Disclaimer: Sarees and Products Information', '', 'We encourage you to reach out to our customer support team for any inquiries or clarifications. Thank you for your understanding.', NULL, NULL, NULL, '2022-12-10 06:25:04', '2023-06-17 01:31:14', 0, 1, 0),
(20, '404 Page', 'Oops! Page Not Found - 404 Error', '', 'Oops! It seems like the page you were looking for is not found', NULL, NULL, NULL, '2022-12-10 06:33:22', '2023-06-17 01:29:08', 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_registeruser`
--

CREATE TABLE `awt_registeruser` (
  `id` int(11) NOT NULL,
  `role` int(2) NOT NULL DEFAULT 1,
  `firstname` varchar(15) DEFAULT NULL,
  `lastname` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `otp` int(11) NOT NULL DEFAULT 0,
  `value` int(2) NOT NULL DEFAULT 1,
  `created_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_registeruser`
--

INSERT INTO `awt_registeruser` (`id`, `role`, `firstname`, `lastname`, `email`, `password`, `mobile`, `active`, `otp`, `value`, `created_date`, `created_by`, `updated_date`, `updated_by`, `deleted`) VALUES
(1, 1, 'Akash', 'Sagvekar', 'sagvekar.akash1992@gmail.com', NULL, '9619353074', NULL, 3447, 0, '2023-01-30 09:55:39', 0, NULL, NULL, 0),
(2, 1, 'Jami', 'Ansari', 'jami.ansari9@gmail.com', NULL, '8767203217', NULL, 0, 0, '2023-05-05 21:21:28', 0, NULL, NULL, 0),
(3, 1, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 5600, 1, NULL, 0, NULL, NULL, 0),
(4, 1, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 5088, 1, '2023-12-12 14:16:34', 0, NULL, NULL, 0),
(5, 1, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 5088, 1, '2023-12-12 14:17:48', 0, NULL, NULL, 0),
(6, 1, NULL, NULL, 'me123@gmail.com', NULL, NULL, NULL, 7514, 1, '2023-12-12 14:38:55', 0, NULL, NULL, 0),
(7, 1, NULL, NULL, 'me123@gmail.com', NULL, NULL, NULL, 7514, 1, '2023-12-12 14:40:35', 0, NULL, NULL, 0),
(8, 1, NULL, NULL, 'me123@gmail.com', NULL, NULL, NULL, 7514, 1, '2023-12-12 14:40:46', 0, NULL, NULL, 0),
(9, 1, NULL, NULL, 'ashokkorde@gmail.com', NULL, NULL, NULL, 2067, 1, '2023-12-12 14:42:03', 0, NULL, NULL, 0),
(10, 1, NULL, NULL, 'ashokkorde@gmail.com', NULL, NULL, NULL, 2067, 1, '2023-12-12 14:42:05', 0, NULL, NULL, 0),
(11, 1, NULL, NULL, 'ashokkorde@gmail.com', NULL, NULL, NULL, 2067, 1, '2023-12-12 14:42:55', 0, NULL, NULL, 0),
(12, 1, NULL, NULL, 'ashokkorde@gmail.com', NULL, NULL, NULL, 2067, 1, '2023-12-12 14:42:55', 0, NULL, NULL, 0),
(13, 1, NULL, NULL, 'shwetu123@gmail.com', NULL, NULL, NULL, 8063, 1, '2023-12-12 14:43:50', 0, NULL, NULL, 0),
(14, 1, NULL, NULL, 'shwetu123@gmail.com', NULL, NULL, NULL, 8063, 1, '2023-12-12 14:44:12', 0, NULL, NULL, 0),
(15, 1, NULL, NULL, 'shwetu123@gmail.com', NULL, NULL, NULL, 8063, 1, '2023-12-12 14:44:20', 0, NULL, NULL, 0),
(16, 1, NULL, NULL, 'kingqueen0665@gmail.com', NULL, NULL, NULL, 6006, 1, '2023-12-12 14:47:49', 0, NULL, NULL, 0),
(17, 1, NULL, NULL, 'dharvik123@gmail.com', NULL, NULL, NULL, 7470, 1, '2023-12-12 15:23:58', 0, NULL, NULL, 0),
(18, 1, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 9014, 1, '2023-12-13 11:35:56', 0, NULL, NULL, 0),
(19, 1, NULL, NULL, 'aish@gmail.com', NULL, NULL, NULL, 931, 1, '2023-12-13 11:39:49', 0, NULL, NULL, 0),
(20, 1, NULL, NULL, 'vilas@gmail.com', NULL, NULL, NULL, 1914, 1, '2023-12-13 12:45:07', 0, NULL, NULL, 0),
(21, 1, NULL, NULL, 'pappy@gmail.com', NULL, NULL, NULL, 8445, 1, '2023-12-13 13:02:14', 0, NULL, NULL, 0),
(22, 1, NULL, NULL, 'priya@gmail.com', NULL, NULL, NULL, 6770, 1, '2023-12-13 13:04:27', 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_registeruser_dummy`
--

CREATE TABLE `awt_registeruser_dummy` (
  `id` int(11) NOT NULL,
  `firstname` varchar(15) DEFAULT NULL,
  `lastname` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `otp` int(11) NOT NULL DEFAULT 0,
  `value` int(2) NOT NULL DEFAULT 0,
  `created_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_registeruser_dummy`
--

INSERT INTO `awt_registeruser_dummy` (`id`, `firstname`, `lastname`, `email`, `password`, `mobile`, `active`, `otp`, `value`, `created_date`, `created_by`, `updated_date`, `updated_by`, `deleted`) VALUES
(1, NULL, NULL, NULL, NULL, '9619353074', NULL, 7825, 0, '2023-01-30 09:55:28', 0, NULL, NULL, 0),
(2, NULL, NULL, NULL, NULL, '8767203217', NULL, 6451, 0, '2023-04-14 18:31:49', 0, NULL, NULL, 0),
(3, NULL, NULL, NULL, NULL, '8767203217', NULL, 2834, 0, '2023-05-05 21:21:15', 0, NULL, NULL, 0),
(4, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 781411, 0, NULL, 0, NULL, NULL, 0),
(5, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 7391, 0, NULL, 0, NULL, NULL, 0),
(6, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 3675, 0, NULL, 0, NULL, NULL, 0),
(7, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 4039, 0, NULL, 0, NULL, NULL, 0),
(8, NULL, NULL, 'satyamsatkr875ad@gmail.com', NULL, NULL, NULL, 1216, 0, NULL, 0, NULL, NULL, 0),
(9, NULL, NULL, 'satyamsatkr8725@gmail.com', NULL, NULL, NULL, 2878, 0, NULL, 0, NULL, NULL, 0),
(10, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 6061, 0, NULL, 0, NULL, NULL, 0),
(11, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 1581, 0, NULL, 0, NULL, NULL, 0),
(12, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 1434, 0, NULL, 0, NULL, NULL, 0),
(13, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 245, 0, NULL, 0, NULL, NULL, 0),
(14, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 4484, 0, NULL, 0, NULL, NULL, 0),
(15, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 3226, 0, NULL, 0, NULL, NULL, 0),
(16, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 5072, 0, NULL, 0, NULL, NULL, 0),
(17, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 2848, 0, NULL, 0, NULL, NULL, 0),
(18, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 1604, 0, NULL, 0, NULL, NULL, 0),
(19, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 1284, 0, NULL, 0, NULL, NULL, 0),
(20, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 1284, 0, NULL, 0, NULL, NULL, 0),
(21, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 1604, 0, NULL, 0, NULL, NULL, 0),
(22, NULL, NULL, 'admin@gmail.in', NULL, NULL, NULL, 8220, 0, NULL, 0, NULL, NULL, 0),
(23, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 6549, 0, NULL, 0, NULL, NULL, 0),
(24, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 3970, 0, NULL, 0, NULL, NULL, 0),
(25, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 9557, 0, NULL, 0, NULL, NULL, 0),
(26, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 9933, 0, NULL, 0, NULL, NULL, 0),
(27, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 7236, 0, NULL, 0, NULL, NULL, 0),
(28, NULL, NULL, 'dahnu@gmail.com', NULL, NULL, NULL, 6930, 0, NULL, 0, NULL, NULL, 0),
(29, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 927, 0, NULL, 0, NULL, NULL, 0),
(30, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 5088, 0, NULL, 0, NULL, NULL, 0),
(31, NULL, NULL, 'akash@apachiweb.co.in', NULL, NULL, NULL, 131, 0, NULL, 0, NULL, NULL, 0),
(32, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 203, 0, NULL, 0, NULL, NULL, 0),
(33, NULL, NULL, 'me123@gmail.com', NULL, NULL, NULL, 8100, 0, NULL, 0, NULL, NULL, 0),
(34, NULL, NULL, 'ashokkorde@gmail.com', NULL, NULL, NULL, 2067, 0, NULL, 0, NULL, NULL, 0),
(35, NULL, NULL, 'shwetu123@gmail.com', NULL, NULL, NULL, 8063, 0, NULL, 0, NULL, NULL, 0),
(36, NULL, NULL, 'kingqueen0665@gmail.com', NULL, NULL, NULL, 9510, 0, NULL, 0, NULL, NULL, 0),
(37, NULL, NULL, 'dharvik123@gmail.com', NULL, NULL, NULL, 7470, 0, NULL, 0, NULL, NULL, 0),
(38, NULL, NULL, 'me123@gmail', NULL, NULL, NULL, 5145, 0, NULL, 0, NULL, NULL, 0),
(39, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 7842, 0, NULL, 0, NULL, NULL, 0),
(40, NULL, NULL, 'akshay@gmail.com', NULL, NULL, NULL, 9014, 0, NULL, 0, NULL, NULL, 0),
(41, NULL, NULL, 'aish@gmail.com', NULL, NULL, NULL, 931, 0, NULL, 0, NULL, NULL, 0),
(42, NULL, NULL, 'aish@gmail.com', NULL, NULL, NULL, 1533, 0, NULL, 0, NULL, NULL, 0),
(43, NULL, NULL, 'numm@gmail.com', NULL, NULL, NULL, 8414, 0, NULL, 0, NULL, NULL, 0),
(44, NULL, NULL, 'abhishekp@apachiweb.co.in', NULL, NULL, NULL, 473, 0, NULL, 0, NULL, NULL, 0),
(45, NULL, NULL, 'prasad@gmail.com', NULL, NULL, NULL, 9759, 0, NULL, 0, NULL, NULL, 0),
(46, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 3889, 0, NULL, 0, NULL, NULL, 0),
(47, NULL, NULL, 'vivek@gmail.com', NULL, NULL, NULL, 861, 0, NULL, 0, NULL, NULL, 0),
(48, NULL, NULL, 'admin@gmail.in', NULL, NULL, NULL, 4846, 0, NULL, 0, NULL, NULL, 0),
(49, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 1003, 0, NULL, 0, NULL, NULL, 0),
(50, NULL, NULL, 'vishal@gmail.com', NULL, NULL, NULL, 2619, 0, NULL, 0, NULL, NULL, 0),
(51, NULL, NULL, 'vilas@gmail.com', NULL, NULL, NULL, 1914, 0, NULL, 0, NULL, NULL, 0),
(52, NULL, NULL, 'viju@gmail.com', NULL, NULL, NULL, 4720, 0, NULL, 0, NULL, NULL, 0),
(53, NULL, NULL, 'pappy@gmail.com', NULL, NULL, NULL, 8445, 0, NULL, 0, NULL, NULL, 0),
(54, NULL, NULL, 'priya@gmail.com', NULL, NULL, NULL, 6770, 0, NULL, 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_service_register`
--

CREATE TABLE `awt_service_register` (
  `id` int(11) NOT NULL,
  `role` int(2) NOT NULL DEFAULT 2,
  `firstname` varchar(15) DEFAULT NULL,
  `lastname` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `otp` int(11) NOT NULL DEFAULT 0,
  `value` int(2) NOT NULL DEFAULT 1,
  `created_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `awt_service_register`
--

INSERT INTO `awt_service_register` (`id`, `role`, `firstname`, `lastname`, `email`, `password`, `mobile`, `active`, `otp`, `value`, `created_date`, `created_by`, `updated_date`, `updated_by`, `deleted`) VALUES
(1, 2, NULL, NULL, 'aish@gmail.com', NULL, NULL, NULL, 1224, 1, '2023-12-13 11:42:47', 0, NULL, NULL, 0),
(2, 2, NULL, NULL, 'numm@gmail.com', NULL, NULL, NULL, 8414, 1, '2023-12-13 11:53:45', 0, NULL, NULL, 0),
(3, 2, NULL, NULL, 'abhishekp@apachiweb.co.in', NULL, NULL, NULL, 473, 1, '2023-12-13 11:58:34', 0, NULL, NULL, 0),
(4, 2, NULL, NULL, 'prasad@gmail.com', NULL, NULL, NULL, 9759, 1, '2023-12-13 12:01:03', 0, NULL, NULL, 0),
(5, 2, NULL, NULL, 'dhana@123gmail.com', NULL, NULL, NULL, 3889, 1, '2023-12-13 12:04:39', 0, NULL, NULL, 0),
(6, 2, NULL, NULL, 'vivek@gmail.com', NULL, NULL, NULL, 861, 1, '2023-12-13 12:07:38', 0, NULL, NULL, 0),
(7, 2, NULL, NULL, 'admin@gmail.in', NULL, NULL, NULL, 4846, 1, '2023-12-13 12:13:16', 0, NULL, NULL, 0),
(8, 2, NULL, NULL, 'satyamsatkr875@gmail.com', NULL, NULL, NULL, 4191, 1, '2023-12-13 12:15:47', 0, NULL, NULL, 0),
(9, 2, NULL, NULL, 'vishal@gmail.com', NULL, NULL, NULL, 2619, 1, '2023-12-13 12:33:31', 0, NULL, NULL, 0),
(10, 2, NULL, NULL, 'viju@gmail.com', NULL, NULL, NULL, 4720, 1, '2023-12-13 12:53:01', 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `awt_userprofile`
--

CREATE TABLE `awt_userprofile` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL DEFAULT 0,
  `gender` varchar(12) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `profile_image` varchar(200) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_by` int(11) DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pagerole`
--

CREATE TABLE `pagerole` (
  `id` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `pageid` int(11) NOT NULL,
  `accessid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `pagerole`
--

INSERT INTO `pagerole` (`id`, `roleid`, `pageid`, `accessid`) VALUES
(1542, 2, 52, 0),
(1541, 2, 51, 0),
(1540, 2, 50, 0),
(1539, 2, 46, 1),
(1538, 2, 45, 1),
(1537, 2, 44, 1),
(1536, 2, 43, 1),
(1535, 2, 42, 1),
(1534, 2, 41, 1),
(1533, 2, 40, 1),
(1532, 2, 39, 1),
(1531, 2, 38, 1),
(1530, 2, 37, 1),
(1529, 2, 36, 1),
(1528, 2, 35, 1),
(1527, 2, 34, 1),
(1526, 2, 33, 1),
(1525, 2, 32, 1),
(1524, 2, 31, 1),
(1523, 2, 30, 1),
(1522, 2, 29, 1),
(1521, 2, 28, 1),
(1520, 2, 27, 1),
(1519, 2, 26, 1),
(1518, 2, 25, 1),
(1517, 2, 24, 1),
(1516, 2, 23, 1),
(1515, 2, 22, 1),
(1514, 2, 21, 1),
(1513, 2, 20, 1),
(1512, 2, 19, 1),
(1511, 2, 18, 1),
(1510, 2, 17, 1),
(1509, 2, 16, 1),
(1508, 2, 15, 1),
(1507, 2, 14, 1),
(1506, 2, 13, 1),
(1505, 2, 12, 1),
(1504, 2, 11, 1),
(1503, 2, 10, 1),
(1502, 2, 9, 1),
(1501, 2, 8, 0),
(1500, 2, 7, 0),
(1499, 2, 6, 0),
(1498, 2, 5, 0),
(1497, 2, 4, 1),
(1748, 1, 46, 1),
(1747, 1, 45, 1),
(1746, 1, 44, 1),
(1745, 1, 39, 1),
(1744, 1, 38, 0),
(1743, 1, 36, 1),
(1742, 1, 35, 1),
(1741, 1, 34, 1),
(1740, 1, 33, 1),
(1739, 1, 32, 1),
(1738, 1, 31, 1),
(1737, 1, 30, 1),
(1736, 1, 29, 1),
(1735, 1, 28, 1),
(1734, 1, 27, 1),
(1733, 1, 26, 1),
(1732, 1, 24, 1),
(1731, 1, 22, 1),
(1730, 1, 21, 1),
(1729, 1, 19, 1),
(1728, 1, 16, 1),
(1727, 1, 15, 1),
(1726, 1, 14, 1),
(1725, 1, 13, 1),
(1724, 1, 12, 1),
(1723, 1, 11, 0),
(1722, 1, 10, 1),
(1721, 1, 9, 1),
(1720, 1, 8, 1),
(1719, 1, 7, 1),
(1718, 1, 6, 1),
(1717, 1, 5, 1),
(1242, 3, 46, 0),
(1241, 3, 45, 1),
(1240, 3, 44, 0),
(1239, 3, 43, 0),
(1238, 3, 42, 1),
(1237, 3, 41, 1),
(1236, 3, 40, 1),
(1235, 3, 39, 1),
(1234, 3, 38, 1),
(1233, 3, 37, 0),
(1232, 3, 36, 0),
(1231, 3, 35, 1),
(1230, 3, 34, 1),
(1229, 3, 33, 1),
(1228, 3, 32, 1),
(1227, 3, 31, 1),
(1226, 3, 30, 1),
(1225, 3, 29, 1),
(1224, 3, 28, 1),
(1223, 3, 27, 1),
(1222, 3, 26, 1),
(1221, 3, 25, 1),
(1220, 3, 24, 1),
(1219, 3, 23, 1),
(1218, 3, 22, 1),
(1217, 3, 21, 1),
(1216, 3, 20, 1),
(1215, 3, 19, 1),
(1214, 3, 18, 1),
(1213, 3, 17, 1),
(1212, 3, 16, 1),
(1211, 3, 15, 1),
(1210, 3, 14, 1),
(1209, 3, 13, 1),
(1208, 3, 12, 1),
(1207, 3, 11, 1),
(1206, 3, 10, 1),
(1205, 3, 9, 1),
(1204, 3, 8, 0),
(1203, 3, 7, 0),
(1202, 3, 6, 0),
(1201, 3, 5, 0),
(1200, 3, 4, 1),
(1199, 3, 3, 1),
(1198, 3, 2, 1),
(1197, 3, 1, 1),
(966, 4, 46, 0),
(965, 4, 45, 0),
(964, 4, 44, 0),
(963, 4, 43, 0),
(962, 4, 42, 0),
(961, 4, 41, 0),
(960, 4, 40, 0),
(959, 4, 39, 0),
(958, 4, 38, 0),
(957, 4, 37, 0),
(956, 4, 36, 0),
(955, 4, 35, 0),
(954, 4, 34, 0),
(953, 4, 33, 0),
(952, 4, 32, 0),
(951, 4, 31, 0),
(950, 4, 30, 0),
(949, 4, 29, 0),
(948, 4, 28, 0),
(947, 4, 27, 0),
(946, 4, 26, 0),
(945, 4, 25, 0),
(944, 4, 24, 0),
(943, 4, 23, 0),
(942, 4, 22, 0),
(941, 4, 21, 0),
(940, 4, 20, 0),
(939, 4, 19, 0),
(938, 4, 18, 0),
(937, 4, 17, 0),
(936, 4, 16, 0),
(935, 4, 15, 0),
(934, 4, 14, 0),
(933, 4, 13, 0),
(932, 4, 12, 0),
(931, 4, 11, 0),
(930, 4, 10, 0),
(929, 4, 9, 0),
(928, 4, 8, 0),
(927, 4, 7, 0),
(926, 4, 6, 0),
(925, 4, 5, 0),
(924, 4, 4, 0),
(923, 4, 3, 0),
(922, 4, 2, 0),
(921, 4, 1, 1),
(1716, 1, 4, 1),
(1496, 2, 3, 1),
(1291, 3, 50, 0),
(1715, 1, 2, 1),
(1495, 2, 2, 1),
(1294, 3, 51, 0),
(1714, 1, 1, 1),
(1494, 2, 1, 1),
(1297, 3, 52, 0);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `created_date` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `delete` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `title`, `slug`, `description`, `image`, `created_by`, `created_date`, `updated_by`, `updated_date`, `delete`) VALUES
(1, 'Admin', NULL, '', NULL, 1, '2018-10-10 09:28:54', 1, '2021-10-13 16:23:52', 0),
(2, 'Digital', NULL, '', NULL, 1, '2021-03-03 05:26:48', 1, '2021-07-21 12:31:23', 0),
(3, 'Customer Support', NULL, '', NULL, 1, '2021-04-02 09:57:43', NULL, NULL, 0),
(4, 'WH', NULL, '', NULL, 1, '2021-04-05 15:29:33', NULL, NULL, 1),
(5, 'Digital Marketing', NULL, '', NULL, 1, '2021-07-21 12:25:53', NULL, NULL, 1),
(6, 'Delivery Boy', NULL, '', NULL, 1, '2023-09-21 11:30:47', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `awt_adminuser`
--
ALTER TABLE `awt_adminuser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`,`mobile`);

--
-- Indexes for table `awt_contact_info`
--
ALTER TABLE `awt_contact_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_dashboard`
--
ALTER TABLE `awt_dashboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_faq`
--
ALTER TABLE `awt_faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_other_pages`
--
ALTER TABLE `awt_other_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_pages`
--
ALTER TABLE `awt_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_registeruser`
--
ALTER TABLE `awt_registeruser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_registeruser_dummy`
--
ALTER TABLE `awt_registeruser_dummy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_service_register`
--
ALTER TABLE `awt_service_register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `awt_userprofile`
--
ALTER TABLE `awt_userprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagerole`
--
ALTER TABLE `pagerole`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `awt_adminuser`
--
ALTER TABLE `awt_adminuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `awt_contact_info`
--
ALTER TABLE `awt_contact_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `awt_dashboard`
--
ALTER TABLE `awt_dashboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `awt_faq`
--
ALTER TABLE `awt_faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `awt_other_pages`
--
ALTER TABLE `awt_other_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `awt_pages`
--
ALTER TABLE `awt_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `awt_registeruser`
--
ALTER TABLE `awt_registeruser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `awt_registeruser_dummy`
--
ALTER TABLE `awt_registeruser_dummy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `awt_service_register`
--
ALTER TABLE `awt_service_register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `awt_userprofile`
--
ALTER TABLE `awt_userprofile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pagerole`
--
ALTER TABLE `pagerole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1749;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
