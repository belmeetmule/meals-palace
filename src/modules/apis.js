const addProject = async(name, url) => {
    let data;
    try {
      const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(name),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      data = await req.json();
    } catch (error) {
      this.alert(error);
      data = null;
    }

    return data;
  }

  const getData = (url) => fetch(url).then((res) => res.json());

  async function fetchData (url) {
    let data;
    try {
      const request = new Request(url);
      const response = await fetch(request);
      data = await response.json();
    } catch (error) {
      this.alert(error);
      data = null;
    }
    return data.meals;
  }

  const sendData = async(data, url) => {
    try {
      const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const result = await req.json();
      if (!data) throw new Error('cant add the scores');
    } catch (error) {
      this.alert(error);
    }
  }

  export const getAllLikes = (url) => new Promise((resolve) => {
    const ALL_LIKES_API_URL = INV_API_BASE + INV_API_KEY + LIKES_ENDPOINT;
    getData(ALL_LIKES_API_URL).then((likesFromAPI) => {
      likesFromAPI.forEach((likeObject) => {
        foodList.setLikes(likeObject.item_id, likeObject.likes);
      });
      resolve();
    });
  });

  export{fetchData, sendData, getData};