import React from 'react';
import { InstagramFilled, LinkedinFilled, TwitterCircleFilled, GithubFilled, FacebookFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

const socialLinks = [
     { icon: <InstagramFilled style={{ fontSize: '16px' }} />, url: 'https://instagram.com', name: 'Instagram' },
     { icon: <LinkedinFilled style={{ fontSize: '16px' }} />, url: 'https://linkedin.com', name: 'LinkedIn' },
     { icon: <TwitterCircleFilled style={{ fontSize: '16px' }} />, url: 'https://twitter.com', name: 'Twitter' },
     { icon: <GithubFilled style={{ fontSize: '16px' }} />, url: 'https://github.com', name: 'GitHub' },
     { icon: <FacebookFilled style={{ fontSize: '16px' }} />, url: 'https://facebook.com', name: 'Facebook' }
];


const Contactstack = () => {
     return (
          <div className="fixed top-1/2 left-6 transform -translate-y-1/2 flex items-center">
               {/* Vertical Line */}
               <div className="h-40 w-0.5 bg-gray-400 mr-3"></div>

               {/* Icon Stack */}
               <div className="flex flex-col space-y-3">
                    {socialLinks.map((link, index) => (
                         <Tooltip title={link.name} key={index} placement='right' overlayInnerStyle={{
                              ontSize: "12px",
                              backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
                              color: "black", // Black text color
                              fontWeight: "bold",
                              fontFamily: "sans-serif",
                              border: "1px solid black", // Black border
                              borderRadius: "4px",
                              padding: "4px 8px",
                              transition: "all 0.3s ease-in-out",
                         }}>
                              <a
                                   key={index}
                                   href={link.url}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-[#ff7700] transition duration-300"
                              >
                                   {link.icon}
                              </a>
                         </Tooltip>
                    ))}
               </div>
          </div>
     );
};

export default Contactstack;
