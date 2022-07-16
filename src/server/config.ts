import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import path from 'path'
import database from '../db/config';
import uploadRouter from '../routes/upload';
import campaignRouter from '../routes/campaign';
import dataRouter from '../routes/data';

class Server {
  private path : {
    upload: string,
    campaign: string,
    getData: string
  }
  private port : number
  private app : express.Application
  constructor(){
    this.app = express()
    this.port = process.env.PORT,
    this.path = {
      upload: '/upload',
      campaign: '/campaign',
      getData: '/data'
    },
    this.db()
    this.middlewares()
    this.routes()
  }

  private publicFolder() {
    const publicPath = path.resolve(__dirname, "../public");
    this.app.use(express.static(publicPath));
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.publicFolder();
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`Server port: ${this.port}`);
    })
  }

  async db(){
    await database()
  }

  routes(){
    this.app.use(this.path.upload, uploadRouter),
    this.app.use(this.path.campaign, campaignRouter),
    this.app.use(this.path.getData, dataRouter)
  }
}

export default Server