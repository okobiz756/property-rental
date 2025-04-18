import mongoose, { Document } from "mongoose";

export interface IProfile extends Document {
  worksAt: string;
  location: string;
  languages: string[];
  intro: string;
  user: mongoose.Schema.Types.ObjectId;
}

export interface IWorksAtPayload {
  id: mongoose.Schema.Types.ObjectId;
  worksAt: string;
}

export interface ICreateLocationPayload {
  id: mongoose.Schema.Types.ObjectId;
  location: string;
}

export interface ICreateLanguagePayload {
  id: mongoose.Schema.Types.ObjectId;
  languages: string[];
}

export interface IBio {
  id: mongoose.Schema.Types.ObjectId;
  intro: string;
}
export interface IAvatar {
  id: mongoose.Schema.Types.ObjectId;
  avatar: string;
}
