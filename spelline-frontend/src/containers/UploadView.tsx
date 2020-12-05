import React from 'react';
import './UploadView.css';
import {User} from '../models/User';

type Props = {
  user: User
};

export const UploadView: React.FC<Props> = (props) => {
  return (
      <div className="upload-view">
        <div className='upload-box'>
          <form method="post" action="#" id="#">
            <div className="files">
              <input type="file" className="form-control"/>
            </div>
          </form>
        </div>
        <div className="file-info">
          lol
        </div>
      </div>
  );
};
