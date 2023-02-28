fetch('/api/v1/posts/?auth_token=a583de639da6b2d6cc20899841f6b00a2a1d9175&kind=news')
      .then(response => response)
      .then(json => console.log(json))

