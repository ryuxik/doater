import React from 'react';
import useSpotifyWebPlaybackSdk from 'use-spotify-web-playback-sdk';

function MusicPlayer() {
    const token = 'BQA-YUj1qC66w26vkn_cXEHe0ycrpzleUBV-x3cp73pCH-fJdISoB0tHZa8UpOoHuewoKgbKAquhDt6lOr71vULM30QxslnfjRsV9xsFhnGE1kfT9AAH3FgY-pBGlQ-zis6NzpUiCaMw1Rn_Dm3VE_8aRFCfuA';
    const {
        Script,
        deviceId,
        connect,
        player, // https://developer.spotify.com/documentation/web-playback-sdk/reference/#api-spotify-player 
        isReady,
      } = useSpotifyWebPlaybackSdk({
        name: "My Spotify Player", // Device that shows up in the spotify devices list
        // getOAuthToken: () => Promise.resolve(sessionStorage.getItem("accessToken")), // Wherever you get your access token from
        getOAuthToekn: (cb) => {cb(token);},
        onPlayerStateChanged: (playerState) => {
          console.log('player state changed:', playerState);
        }
      });
     
      React.useEffect(
        () => {
          if (isReady) {
            connect();
          }
        },
        [isReady],
      );
     
      // value == ...
      return (
        <div className="music-player-container">
            <React.Suspense fallback={<div>Loading...</div>}>
            {/* <WebPlaybackSdkScript> */}
            <div>Any children</div>
            {/* </WebPlaybackSdkScript> */}
            </React.Suspense>
        </div>
      );

    // componentDidMount() {
    //     window.onSpotifyWebPlaybackSDKReady = () => {
    //         const token = 'BQA-YUj1qC66w26vkn_cXEHe0ycrpzleUBV-x3cp73pCH-fJdISoB0tHZa8UpOoHuewoKgbKAquhDt6lOr71vULM30QxslnfjRsV9xsFhnGE1kfT9AAH3FgY-pBGlQ-zis6NzpUiCaMw1Rn_Dm3VE_8aRFCfuA';
    //         const player = new Spotify.Player({
    //           name: 'Web Playback SDK Quick Start Player',
    //           getOAuthToken: cb => { cb(token); }
    //         });
      
    //         // Error handling
    //         player.addListener('initialization_error', ({ message }) => { console.error(message); });
    //         player.addListener('authentication_error', ({ message }) => { console.error(message); });
    //         player.addListener('account_error', ({ message }) => { console.error(message); });
    //         player.addListener('playback_error', ({ message }) => { console.error(message); });
      
    //         // Playback status updates
    //         player.addListener('player_state_changed', state => { console.log(state); });
      
    //         // Ready
    //         player.addListener('ready', ({ device_id }) => {
    //           console.log('Ready with Device ID', device_id);
    //         });
      
    //         // Not Ready
    //         player.addListener('not_ready', ({ device_id }) => {
    //           console.log('Device ID has gone offline', device_id);
    //         });
      
    //         // Connect to the player!
    //         player.connect();
    //     };
    // }
}

export default MusicPlayer;