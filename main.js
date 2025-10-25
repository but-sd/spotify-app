// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBWTMaP9tAbtHdRmE7SYxgSyL-B3DoaP1GVp4SOSYIdquNIJhhADX5xl09hWtnWaDWbdqyRrxVOg-7vpOwUGZKU2Nr3XK4fy3GfY57j0O7wRbJmBltxImK8mWEONQYqvkGKELo4qyRkywrb_C0w6s7QsHjIE7dtizK-KBersTtpPMUxqHr1RUUOivXOXDLDgH39SjuEivnPrYX_lceF2HjpfnmLcScvGwzWItsZtURW_wpfUAJOOx--0KsJCl-dPOAFRkzEYYGAMHi7nXbeb1I6ufpsy1ZGCEB4gHsrfnhuUO3hrCQ';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=25', 'GET'
  )).items;
}

getTopTracks().then(tracks => {
    // console.table(tracks);
  console.log(
    tracks?.map(
      ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );
});