import React from "react";
import { Link } from "react-router-dom";
import SidebarClient from "../SidebarClient";

function ClientHelpSection({clientName}) {
  return (
    <div className="flex">
      <SidebarClient clientName={clientName}/>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-gray-200">
          <div className="w-full md:w-1/2 mb-8 md:pr-8 border-r border-gray-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">General Information</h2>
              <ul className="list-disc list-inside">
                <li className="mb-4">
                  <strong className="text-blue-600">How do I update my profile information?</strong> - You can update your profile information by navigating to the settings page and selecting the "Edit Profile" option.
                </li>
                <li className="mb-4">
                  <strong className="text-blue-600">What should I do if I forget my password?</strong> - If you forget your password, you can reset it by clicking on the "Forgot Password" link on the login page and following the instructions.
                </li>
                <li>
                  <strong className="text-blue-600">How do I contact customer support?</strong> - You can contact customer support by emailing <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a> or calling <a href="tel:+1234567890" className="text-blue-600">+1234567890</a>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Live Chat Support</h3>
                <p>
                  Chat with a support representative now.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Tutorials and Guides</h3>
                <p>
                  Browse our Help Center for tutorials and guides.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Feedback Form</h2>
              <p>
                Tell us what you think! <Link to="/feedback" className="text-blue-600">Submit feedback here</Link>.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Terms of Service and Privacy Policy</h2>
              <p>
                <Link to="/terms" className="text-blue-600">View our Terms of Service</Link> and <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Request Assistance</h2>
              <p>
                Need help with something specific? <Link to="/request-assistance" className="text-blue-600">Submit a request here</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHelpSection;
