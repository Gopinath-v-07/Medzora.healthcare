import React from 'react';
import { HomeIcon, UserIcon, DocumentIcon, MessageSquareIcon, SettingsIcon, EmergencyIcon, CameraIcon, HeartIcon } from './ui/Icons';
import { UserRole } from '../types';

export type TabType = 'home' | 'profile' | 'records' | 'chat' | 'settings' | 'emergencies' | 'vision-triage' | 'dignity-companion';

interface SidebarProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
    userRole?: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, userRole }) => {
    const tabs = [
        { id: 'home', icon: HomeIcon, label: 'Home' },
        { id: 'profile', icon: UserIcon, label: 'Profile' },
        { id: 'records', icon: DocumentIcon, label: userRole === UserRole.DOCTOR ? 'Verified Reports' : 'Reports' },
        ...(userRole === UserRole.PATIENT ? [
            { id: 'emergencies', icon: EmergencyIcon, label: 'Emergencies' },
            { id: 'vision-triage', icon: CameraIcon, label: 'Vision Analyzer' },
            { id: 'dignity-companion', icon: HeartIcon, label: 'For Women' }
        ] : []),
        { id: 'settings', icon: SettingsIcon, label: 'Settings' },
    ] as const;

    return (
        <aside className="w-24 md:w-80 bg-white border-r border-slate-200 flex flex-col py-7 flex-shrink-0 z-20 fixed left-0 top-0 h-screen overflow-y-auto overflow-x-hidden">
            <div className="flex items-center justify-center md:justify-start px-4 md:px-7 mb-10 w-full">
                <span className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-sm flex-shrink-0">M</span>
                <h1 className="hidden md:block text-2xl font-semibold text-slate-800 tracking-tight ml-3">
                    Medzora
                </h1>
            </div>

            <div className="flex-1 w-full flex flex-col space-y-2 px-3 md:px-5">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <div key={tab.id} className="w-full">
                            <button
                                onClick={() => onTabChange(tab.id)}
                                className={`w-full flex items-center py-3.5 px-3 md:px-5 rounded-xl transition-all duration-200 relative group ${isActive
                                    ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                                title={tab.label}
                            >
                                <Icon className="w-6 h-6 flex-shrink-0" />
                                <span className={`hidden md:block ml-4 text-base ${isActive ? 'font-semibold' : 'font-medium'}`}>{tab.label}</span>
                            </button>
                        </div>
                    );
                })}
            </div>

        </aside>
    );
};
