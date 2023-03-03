import React from 'react'
import {AppLayout} from '../../components'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Style = styled.div `

    .span {
        font-weight: bold;
    }

    #header { 
        font-weight: 800;
        
    }

      #btndv{
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
    }

    p{
      margin-top: 2rem;
    }

    button {
      width: fit-content;
      background-color: #463c74;
      color: white;
      margin-bottom: 3rem;
      
      
    }
`

export const Terms = () => {
  return (
    
      <Style className='px-5 pt-4 '> 
        <div className='text-center '> 
             <h1 > SECURITY & COMPLIANCE </h1>
            <h2> How We Store, Process, and Secure Your Data </h2>
        </div>

        <div> 
           
            <p> <span id='header'>   Data Centers:  </span> Data centers are a critical component of modern organizations and play a crucial role in supporting business operations, storing critical data, maintaining high availability, improving scalability and performance, and complying with regulations.
            PharmaServ is hosted at Amazon data centers. This data centers are spread accross multiple regions, providing physical security 24/7, state of the art fire suppression, redundant utilities, and biometric devices to ensure your data is safe
            </p>
        </div>

         <div> 
           <p> <span id='header'> Network Security:  </span> Network security is crucial because networks are the backbone of modern organizations and are used to transmit sensitive information, process critical business transactions, and store confidential data.
            We take several steps to protect your data and prevent eavesdropping between your systems and ours. All network traffic runs over SSL/HTTPS, the most common and trusted communications protocol on the Internet. We have configured firewalls in place to restrict access from malicious adddresses to protect confidentiality of  information, maintaining business operations, preventing cyber attacks, complying with regulations, and protecting against malware. We prioritize network security and implement effective security measures to ensure the protection of their systems and data.

             </p>
        </div>


             <div> 
           <p> <span id='header'> System Security:  </span> We regularly patch our softwares and operating systems to the lastest and most secure version. We maintain system consistency and security using strong passwords, and restricting access to only authorized people.
             </p>
        </div>

          <div> 
           <p> <span id='header'>  Security Operations: </span> We monitor our systems 24/7 using state-of-the-art alert and monitoring tools to detect anomalies and act immediately. We monitor activity logs for auditing, troubleshooting and policy reasons. We are always lookin for potential system interruptions and we address the issues to prevent reoccurence in future.
             </p>
        </div>

        <div> 
           <p> <span id='header'> Access Control: </span> We operate on least priviledge access, granting only access to resources requred to perform a task.  We ensure confidentiality of our customers assests and other vital information. You fully control how your information is used.
            PharmaServ offices are protected behind network firewalls from well-known security vendors and secured by keycard access. Our employee workstations and laptops are imaged and managed using JAMF.

             </p>
        </div>

         <div> 
           <p> <span id='header'> Vulnerabilty Assesment and Penetration Testing:  </span> Vulnerability assessment and penetration testing are important security measures that we use to identify and assess the potential weaknesses and vulnerabilities of our systems and networks. This helps us to prioritize our security efforts and allocate resources effectively to minimize the risk of cyber attacks.
            We carry out regular vulnerability assessment and penetration testing of our systems and applications, checking for potential threat and weaknesses attackers can use to gain unauthorized access to our system.

             </p>
        </div>

         <div> 
           <p> <span id='header'> Application Level Security: </span> Application-level security is essential because applications are often the primary targets of cyber attacks. Our applications processes and stores sensitive information, and if not secure, information can be easily stolen or compromised. To avoid attacks, we have built our applications secure against multiple forms of web vulnerabilities  some of which are Cross-Site Scripting (XSS), SQL Injection, Broken Authentication and Session Management, Cross-Site Request Forgery (CSRF), Remote Code Execution.
            We also prevent single point of failure, In the advent of service interruption, we have back up services that run immediately allowing you to continue your business withouth hitch. Our services are cloud based, making them accessible world wide.

             </p>
        </div>

        <div> 
           <p> <span id='header'> Data Protection, Continuity, and Retention: </span> Production data is mirrored to remote systems and automatically backed up daily to a cloud and on-premise locations. We ensure 100% confidentiality, integrity and availability of your data. Collectively these helps us to an minimize the risk of data loss and ensure the ongoing availability of critical information.

             </p>
        </div>

         <div> 
           <p> <span id='header'> Termination Of Contract: </span> If you decide to terminate a contract, we ensure all your data are removed from our system, you can also request for certain  transferrable data be transferred to you if need be. To cancel and delete your account, please contact your PharmaServ account manager. Canceling your account will restrict you from accessing  our Platform and affects all data associated with your account. You can also request to suspend your account for a certain period.

             </p>
        </div>

         <div> 
           <p> <span id='header'> NDPR Compliance: </span> NDPR (National Data Protection Regulation) ensureS that organizations that process personal data do so in a responsible and secure mannerto protect the privacy rights of individuals.
            PharmaServ is committed to ensuring ongoing compliance with the Nigeria Data Protection Regulation (NDPR). The NDPR extends the reach of the data protection laws 2019 and establishes many new requirements for organizations that fall under its scope. 


             </p>
        </div>

         <div> 
           <p> <span id='header'> Bug Bounty: </span> Our platform is constantly evolving to delight our customers with new features and innovation. In an effort to increase security of our ever-changing attack surfaces, we have implemented a bug bounty program that challenges our controls and tightens our defenses on a continuous basis

             </p>
        </div>

        <Link to="/"> 
            <div id='btndv'> 
                <button type="button" class="btn "> Home </button>
              </div>
        </Link>
      </Style>
    
  )
}
