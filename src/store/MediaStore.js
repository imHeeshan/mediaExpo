import { makeObservable, observable } from "mobx";
import axios from "axios";
class MediaStoreConfig {
  isLoading = true;
  mediaFiles = [];
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      mediaFiles: observable,
    });
  }
  async fetchItems() {
    await axios("https://jsonplaceholder.typicode.com/photos").then(
      (response) => {
        this.mediaFiles = response.data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

export const MediaStore = new MediaStoreConfig();
