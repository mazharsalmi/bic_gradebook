import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';

export default function AllBody() {
  return (
    <div className='data'>
    <div className='feacter'>
          <button><ShareIcon/>Share</button>
          <button><PrintIcon/>Print</button>
          <button><SendToMobileIcon/>Export</button>
          </div>
    </div>
  )
}
