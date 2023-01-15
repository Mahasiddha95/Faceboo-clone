import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fms-my.facebook.com%2Ffranchino.official.page%2F&psig=AOvVaw1GzsCUSjUV2eNBUwuioPjq&ust=1673900729096000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCguaS0yvwCFQAAAAAdAAAAABAE'} title={'Valerio Franchino'} />
      <SidebarRow 
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'/>
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon}title='Messanger'/>
      <SidebarRow Icon={StorefrontIcon}title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon}title='Videos'/>
      <SidebarRow Icon={ExpandMoreIcon}title='Marketplace' />
  </div>
  );
}

export default Sidebar