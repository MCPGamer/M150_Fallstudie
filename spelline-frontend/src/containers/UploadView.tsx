import React, {useState} from 'react';
import './UploadView.css';
import {User} from '../models/User';
import {defaultRequest, Request, RequestLevel} from '../models/Request';

type Props = {
  user: User
};

export const UploadView: React.FC<Props> = (props) => {
  const [request, setRequest] = useState<Request>(defaultRequest);
  const [file, setFile] = useState<string>('');
  const [wordcount, setWordcount] = useState<number>(0);
  const [level, setLevel] = useState<RequestLevel>(RequestLevel.NORMAL);
  const [price, setPrice] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'file') {
      setFile(e.target.value);
      /*
      * setWordcount()
      * setPrice()
      * */
    } else if (e.target.name === 'normal') {
      setLevel(RequestLevel.NORMAL);
    } else if (e.target.name === 'pro') {
      setLevel(RequestLevel.PRO);
    } else if (e.target.name === 'proExpress') {
      setLevel(RequestLevel.EXPRESSPRO);
    }
  };

  return (
      <div>
        <h2 className="title">File Upload</h2>
        <div className="upload-view">
          <form className="upload-view" method="post" action="#" id="#">
            <div className='upload-box'>
              <div className="files">
                <input accept="application/pdf" type="file" name='file' className="form-control"
                       onChange={handleChange}
                       value={file}/>
              </div>
            </div>
            <div className="file-info">
              <table>
                <tbody>
                <tr>
                  <td>Wordcount:</td>
                  <td>{wordcount}</td>
                </tr>
                <tr>
                  <td>Level:</td>
                  <td>
                    <br/>
                    <label>
                      <input type="radio" radioGroup="level" value={level} name="normal" onChange={handleChange}
                             checked={level === RequestLevel.NORMAL}/>
                      Normal
                    </label>
                    <br/>
                    <label>
                      <input type="radio" radioGroup="level" value={level} name="pro" onChange={handleChange}
                             checked={level === RequestLevel.PRO}/>
                      Professional
                    </label>
                    <br/>
                    <label>
                      <input type="radio" radioGroup="level" value={level} name="proExpress" onChange={handleChange}
                             checked={level === RequestLevel.EXPRESSPRO}/>
                      Express Professional
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>Pay with:</td>
                  <td>lol</td>
                </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
  );
};
