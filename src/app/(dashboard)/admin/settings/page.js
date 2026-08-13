"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const SettingsPage = () => {
    const [generalData, setGeneralData] = useState({
        siteName: "",
        systemEmail: "",
        description: "",
    });

    const [securityData, setSecurityData] = useState({
        twoFactorEnabled: false,
        sessionTimeout: 30,
    });

    const handleGeneralChange = (e) => {
        setGeneralData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSecurityChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSecurityData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleGeneralSubmit = (e) => {
        e.preventDefault();
        // TODO: connect to API
    };

    const handleSecuritySubmit = (e) => {
        e.preventDefault();
        // TODO: connect to API
    };

    return (
        <div>
            <DashboardPageTitle title="Settings" description="Manage your site's general and security configuration" />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <form onSubmit={handleGeneralSubmit} className="h-fit rounded-lg border border-gray-100 bg-white p-6">
                    <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
                        <i className="fa-solid fa-gear text-primary" />
                        General Configuration
                    </h2>

                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium">Site Name</label>
                        <Input
                            type="text"
                            name="siteName"
                            value={generalData.siteName}
                            onChange={handleGeneralChange}
                            placeholder="Webpoka"
                            className="mb-0"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium">System Email Address</label>
                        <Input
                            type="email"
                            name="systemEmail"
                            value={generalData.systemEmail}
                            onChange={handleGeneralChange}
                            placeholder="support@webpoka.com"
                            className="mb-0"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-medium">Site Description / Tagline</label>
                        <Textarea
                            name="description"
                            rows={4}
                            value={generalData.description}
                            onChange={handleGeneralChange}
                            placeholder="Custom software solutions for modern businesses"
                            className="mb-0"
                        />
                    </div>

                    <Button variant="secondary" type="submit" className="rounded px-6 py-3">
                        Save Configuration
                    </Button>
                </form>

                <form onSubmit={handleSecuritySubmit} className="h-fit rounded-lg border border-gray-100 bg-white p-6">
                    <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
                        <i className="fa-solid fa-shield-halved text-primary" />
                        Security & Auth Policies
                    </h2>

                    <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-100 p-4">
                        <div>
                            <p className="font-medium">Two-Factor Authentication (2FA)</p>
                            <p className="text-sm text-light">Require a verification code at login</p>
                        </div>
                        <input
                            type="checkbox"
                            name="twoFactorEnabled"
                            checked={securityData.twoFactorEnabled}
                            onChange={handleSecurityChange}
                            className="h-5 w-5"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-medium">Session Timeout Duration</label>
                        <Input
                            type="number"
                            name="sessionTimeout"
                            value={securityData.sessionTimeout}
                            onChange={handleSecurityChange}
                            className="mb-0"
                            min={1}
                        />
                        <p className="mt-1 text-xs text-light">
                            minutes of idle time before automatic logoff
                        </p>
                    </div>

                    <Button variant="secondary" type="submit" className="rounded px-6 py-3">
                        Update Security Policies
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;