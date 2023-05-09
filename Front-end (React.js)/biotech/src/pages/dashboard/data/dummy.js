import React from 'react';
import { AiOutlineDashboard,AiOutlineFileAdd} from 'react-icons/ai';
import { BiNotepad,BiBookAdd } from 'react-icons/bi';
import {TbChecklist,TbReportMedical} from 'react-icons/tb';
import {GrTest} from 'react-icons/gr'


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Biotech Labs',
        icon: <AiOutlineDashboard />,
        link:'/dashboard/'
      },
    ],
  },

  {
    title: 'Appointments',
    links: [
      {
        name: 'View Appointments',
        icon: <TbChecklist />,
        link:'/dashboard/appointments'
      },
      {
        name: 'Manage Appointments',
        icon: <BiNotepad />,
        link:'/dashboard/manage-appointments'
      },
    ],
  },
  {
    title: 'Reports',
    links: [
      {
        name: 'View Reports',
        icon: <TbReportMedical />,
        link:'/dashboard/reports'
      },
      {
        name: 'Add Report',
        icon: <AiOutlineFileAdd />,
        link:'/dashboard/add-report'
      },
    ],
  },
  {
    title: 'Tests',
    links: [
      {
        name: 'Available Tests',
        icon: <GrTest />,
        link:'/dashboard/tests'
      },
      {
        name: 'Add Test Type',
        icon: <BiBookAdd />,
        link:'/dashboard/add-test'
      },
    ],
  },
];