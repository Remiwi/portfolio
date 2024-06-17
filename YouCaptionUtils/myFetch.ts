export function fetchGet(url: string, options?: any) {
  console.log("fetchGet");
  return null;
  // const headers = {
  //   method: 'GET',
  //   mode: 'cors',
  //   credentials: 'include',
  // };

  // const mergedOptions: RequestInit = { ...headers, ...options };
  // return fetch(url, { ...headers, ...options });
}

export function fetchGetErrorHandled(url: string, options?: any) {
  console.log("fetchGetErrorHandled");
  return null;
  // const headers = {
  //   method: 'GET',
  //   mode: 'cors',
  //   credentials: 'include',
  // };

  // return fetch(url, { ...headers, ...options }).then(response => {
  //   if (!response.ok) {
  //     if (response.status === 401) {
  //       throw new Error('Please log in');
  //     } else {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   }
  //   return response.json();
  // });
}

export function fetchGetWithBody(url: string, options?: any) {
  console.log("fetchGetWithBody");
  return null;
  // const headers = {
  //   method: 'GET',
  //   mode: 'cors',
  //   credentials: 'include',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  // const mergedOptions: RequestInit = { ...headers, ...options };
  // return fetch(url, mergedOptions);
}

export function fetchPost(url: string, options?: any) {
  console.log("fetchPost");
  return null;
  // const headers = {
  //   method: 'POST',
  //   mode: 'cors',
  //   credentials: 'include',
  // };

  // return fetch(url, { ...headers, ...options })
  // .then(response => {
  //   if (!response.ok) {
  //     if (response.status == 401) {
  //       throw new Error('Please log in');
  //     } else {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   }
  //   return response.json();
  // });
}

export function fetchPostJSON(url: string, options?: any) {
  console.log("fetchPostJSON");
  return null;
  // const headers = {
  //   'Content-Type': 'application/json' 
  // };

  // return fetch(url, { 
  //   method: 'POST', 
  //   mode: 'cors',
  //   credentials: 'include',
  //   headers: { ...headers, ...options?.headers },
  //   ...options
  // })
  // .then(response => {
  //   if (!response.ok) {
  //     if (response.status == 401) {
  //       throw new Error('Please log in');
  //     } else {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   }
  //   return response.json();
  // });
}
