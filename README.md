# Yet Another YouTube Video Downloader

Download videos from command line using


### Build Files
```bash
npx tsc
```

### Usage
```bash
# Download Playlist
yarn run start <link> -p -n -o ~/Downloads

# Download Single Video
yarn run start <link>
```

## Options:

`--playlist` or `-p` : Download All videos from playlist

`--numbered` or `-n` : Replace Video title with number

`--output` or `-o` : Path where the files will be stored. Default `$PWD`

## Note
Don't add `-p` and `-n` if you're downloading a single video. `-p` is only for playlist
