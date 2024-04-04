/* eslint-disable max-len */
import React, { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import SectionHeadings from "component/publicPage/home/SectionHeadings";

const tempData = [
  {
    heading: "What is a software development company?",
    data: `<p className="py-1">A software development company specializes in creating, designing, testing, and maintaining software applications and systems. These companies cater to a wide range of industries by assembling teams that include software developers, engineers, project managers, and quality assurance professionals. Together, they navigate through the software development lifecycle (SDLC) to deliver custom software solutions that align with specific client needs and objectives. Utilizing methodologies like Agile, Scrum, or Waterfall, these companies ensure the delivery of high-quality, scalable, and reliable products. In addition to development, many such companies also offer IT consulting, system integration, and ongoing support services, positioning themselves as comprehensive technology partners for businesses aiming to innovate and enhance efficiency through software.</p>`,
  },
  {
    heading: "Why should I choose Deeporion for my app development project?",
    data: `<p>At Deeporion, we understand that at the heart of every successful app is a solution that not only meets but anticipates the needs of its users. Here's why partnering with us will be your best step towards achieving a truly customer-centric software solution:</p>
    <ul>
        <li><strong>Expertise and Experience:</strong> Deeporion's proven track record in delivering high-quality app development projects ensures they can navigate the complexities of software creation efficiently.</li>
        <li><strong>Custom Solutions:</strong> Tailored app development services mean your business requirements are precisely met, enhancing overall efficiency and engagement.</li>
        <li><strong>Technological Proficiency:</strong> With a commitment to the latest technologies and methodologies, Deeporion provides scalable, secure, and robust software solutions.</li>
        <li><strong>Comprehensive Services:</strong> Offering a full range of services from ideation to post-launch support, Deeporion simplifies the development process with a seamless end-to-end solution.</li>
        <li><strong>Customer-Centric Approach:</strong> A focus on your needs and feedback ensures the final product aligns with your vision and business objectives.</li>
        <li><strong>Competitive Pricing:</strong> Deeporion offers cost-effective solutions without compromising on quality, providing great value for your investment.</li>
        <li><strong>Post-Launch Support:</strong> Ongoing support and maintenance services ensure your application remains current and continues to perform optimally.</li>
    </ul>
    <p>Conduct thorough research, review Deeporion's portfolio, and engage with their team to ensure they are the right fit for your project's unique needs.</p>`,
  },
  {
    heading: "What type of industries have you served in the past?",
    data: `<p>At Deeporion, we pride ourselves on delivering industry-specific software solutions that cater to the unique needs of various sectors. Here are some of the industries we have served:</p>
    <ul>
        <li><strong>Healthcare:</strong> Development of patient management systems, telehealth platforms, and data analysis tools.</li>
        <li><strong>Finance and Banking:</strong> Secure financial applications, mobile banking apps, and fintech innovations.</li>
        <li><strong>Retail and E-commerce:</strong> E-commerce websites, retail management systems, and CRM solutions.</li>
        <li><strong>Education:</strong> E-learning platforms, classroom management software, and educational games.</li>
        <li><strong>Manufacturing:</strong> Automation, supply chain management, and predictive maintenance software.</li>
        <li><strong>Entertainment and Media:</strong> Content management systems, streaming platforms, and interactive apps.</li>
        <li><strong>Transportation and Logistics:</strong> Route optimization, fleet management, and logistics solutions.</li>
        <li><strong>Real Estate:</strong> Property management systems, virtual tour software, and marketplace platforms.</li>
    </ul>
    <p>Each industry's unique challenges and opportunities are addressed by the technical expertise and innovative solutions provided by software development companies.</p>`,
  },
  {
    heading: "What Makes Your IT Firm Different?",
    data: `<p>Choosing the right IT partner is crucial for the success of your projects. Here's what sets our IT firm apart from the competition:</p>
    <ul>
        <li><strong>Innovative Solutions:</strong> We leverage the latest technologies to provide cutting-edge solutions, helping our clients stay ahead of technological advancements.</li>
        <li><strong>Customized Services:</strong> Our approach is tailored to meet the precise needs of each client, ensuring solutions that truly address your unique challenges and goals.</li>
        <li><strong>Expert Team:</strong> Our team comprises highly skilled professionals with deep industry knowledge, ready to bring their expertise to your projects.</li>
        <li><strong>Client-Centric Approach:</strong> Your satisfaction is our priority. We're dedicated to building lasting relationships through responsiveness, flexibility, and transparency.</li>
        <li><strong>Robust Project Management:</strong> Utilizing proven methodologies, we guarantee the timely, budget-friendly, and high-quality delivery of your projects.</li>
        <li><strong>Security and Compliance:</strong> We uphold stringent security standards and adhere to relevant regulations, ensuring your data's protection and privacy.</li>
        <li><strong>Global Reach with Local Insight:</strong> Our global perspective, combined with local market understanding, provides a comprehensive view that benefits your international and local projects alike.</li>
        <li><strong>Sustainability and Social Responsibility:</strong> Our commitment to sustainability and positive community impact aligns with the values of our clients and sets us apart.</li>
    </ul>`,
  },
  {
    heading: "How Do You Handle Changes During Development?",
    data: `<p>Adapting to changes is crucial in software development. Here's how our team manages changes during the development process to ensure the best outcomes:</p>
    <ul>
        <li><strong>Regular Sprint Reviews:</strong> After each sprint, we review completed work and discuss necessary adjustments, incorporating stakeholder feedback and evolving project requirements.</li>
        <li><strong>Backlog Grooming:</strong> We continuously prioritize and update our product backlog to reflect any changes, ensuring our focus aligns with the project's goals and stakeholder expectations.</li>
        <li><strong>Collaboration and Communication:</strong> Through open communication channels within our team and with stakeholders, we ensure that everyone is informed about changes and their impacts, utilizing tools like JIRA, Trello, or Asana for tracking.</li>
        <li><strong>Adaptation and Flexibility:</strong> Our Agile methodology equips us to respond to changes swiftly, ensuring that project timelines and budgets are maintained without compromising on quality.</li>
        <li><strong>Change Control Process:</strong> For significant changes, we implement a formal change control process to assess impacts, make informed decisions, and update documentation and plans accordingly.</li>
    </ul>
    <p>Embracing change allows us to create software that truly meets user needs and adapts to the dynamic technological landscape.</p>`,
  },
  {
    heading: "How Do You Ensure Project Security?",
    data: `<p>Maintaining the security of our projects is paramount. Here's an overview of the strategies we employ to ensure the highest levels of security throughout the development process:</p>
    <ul>
        <li><strong>Secure Coding Practices:</strong> Our developers adhere to secure coding guidelines designed to prevent vulnerabilities and protect against common threats.</li>
        <li><strong>Regular Security Audits:</strong> We conduct thorough security audits and code reviews to identify and rectify potential security issues early in the development cycle.</li>
        <li><strong>Data Encryption:</strong> Sensitive data is encrypted both at rest and in transit, using strong encryption standards to prevent unauthorized access.</li>
        <li><strong>Authentication and Authorization:</strong> We implement robust authentication mechanisms and fine-grained authorization controls to ensure that access is securely managed.</li>
        <li><strong>Compliance with Standards:</strong> Our projects comply with relevant security standards and regulations, such as GDPR, HIPAA, or PCI DSS, depending on the project requirements.</li>
        <li><strong>Security Training:</strong> Our team receives regular training on the latest security threats and best practices to stay ahead of potential risks.</li>
        <li><strong>Incident Response Plan:</strong> We have a comprehensive incident response plan in place to quickly address and mitigate any security breaches or vulnerabilities that may arise.</li>
    </ul>
    <p>By integrating these strategies into our development process, we strive to deliver secure and reliable software solutions to our clients.</p>`,
  },
];

export default function FrequentlyAskedQueston() {
  const { t } = useTranslation();
  const [active, setActive] = useState();

  return (
    <div className="w-full flex flex-col items-center py-[5.1rem] px-[35px] gap-[2.88rem]">
      <SectionHeadings
        headingPart1={t("faq")}
        headingPart2={t("questions")}
        subHeading={t("faq_subheading")}
      />
      <div className="w-full flex flex-col justify-center items-center gap-[10px]">
        {tempData.map((data, index) =>
          active === index ? (
            <div
              key={index}
              className="w-full max-w-[55.5rem] p-[1.88rem] flex flex-col gap-[1.25rem] rounded-[8px] bg-[#F3F6FD]
            shadow-[0px_0px_20px_0px_rgba(3,27,89,0.10)_inset]"
            >
              <div className="flex justify-between items-start gap-[18px]">
                <span className="text-[#ED6E0F] w-fit text-[18px] leading-6 font-semibold font-Raleway">
                  {data.heading}
                </span>
                <BiMinusCircle
                  className="cursor-pointer h-6 w-6"
                  fill="#ED6E0F"
                  onClick={() => setActive(null)}
                />
              </div>
              <p className="text-[#646978] leading-[22px]" dangerouslySetInnerHTML={{ __html: data.data }}>
              </p>
            </div>
          ) : (
            <div
              key={index}
              className="w-full max-w-[55.5rem] lg:max-h-[5.25rem] h-fit flex justify-between
             border-b border-[#DCDCDC] p-[30px] gap-2"
            >
              <h4 className="text-[#242529] w-fit leading-[22px] font-Raleway">
                {data.heading}
              </h4>
              <BiPlusCircle
                className="cursor-pointer h-6 w-6"
                onClick={() => setActive(index)}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
