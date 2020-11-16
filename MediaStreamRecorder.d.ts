
declare module "msr" {

  export class MediaStreamRecorder {

    /**
     * You can force StereoAudioRecorder or WhammyRecorder or similar recorders on Firefox or Edge; even on Chrome and Opera.
     * All browsers will be using your specified recorder:
     */
    recorderType: StereoAudioRecorder|WhammyRecorder|MediaRecorderWrapper|GifRecorder;

    /**
     * To choose between Stereo or Mono audio.
     * It is an integer value that accepts either 1 or 2.
     * "1" means record only left-channel and skip right-one.
     * The default value is "2".
     */
    audioChannels: number;
    
    /**
     * You can set following audio-bufferSize values: 0, 256, 512, 1024, 2048, 4096, 8192, and 16384.
     * "0" means: let chrome decide the device's default bufferSize.
     * Default value is "2048".
     */
    bufferSize: 0|256|512|1024|2048|4096|8192|16384;

    /**
     * Default "sampleRate" value is "44100".
     * Currently you can't modify sample-rate in windows that's why this property isn't yet exposed to public API. 
     * It accepts values only in range: 22050 to 96000
     */
    sampleRate: number;

    /**
     * It is recommended to pass your HTMLVideoElement to get most accurate result.
     */
    video: HTMLVideoElement;

    /**
     * This callback is invoked when the first non-blank frame is drawn.
     */
    onStartedDrawingNonBlankFrames: () => void;

    /**
     * This method allows you stop recording.
     */
    stop(): void;

    /**
     * This method allows you pause recording.
     */
    pause(): void;

    /**
     * This method allows you resume recording.
     */
    resume(): void;

    /**
     * This method allows you save recording to disk (via save-as dialog).
     */
    save(): void;
    save(blob: Blob, name: string);

    /**
     * Using this property, you can pass video resolutions:
     */
    canvas: {
      width: number,
      height: number
    };

    /**
     * You can stretch video to specific width.
     */
    videoWidth: number;

    /**
     * You can stretch video to specific height:
     */
    videoHeight: number;

    /**
     * This method allows you clear current video-frames.
     * You can use it to remove blank-frames.
     */
    clearOldRecordedFrames(): void;

    /**
     * This method allows you stop entire recording process.
     */
    stop(): void;

    /**
     * This method takes "interval" as the only argument and it starts recording process.
     * The interval is specified in milliseconds.
     */
    start(interval: number): void;

    /**
     * This event is fired according to your interval and "stop" method.
     */
    ondataavailable: (data: Blob) => void;

    /**
     * This event is fired when recording is stopped, either by invoking "stop" method or in case of any unexpected error.
     */
    onstop: () => void;

    /**
     * This property allows you set output media type.
     */
    mimeType: "video/webm"|"video/mp4"|"audio/webm"|"audio/ogg"|"audio/wav"|"audio/pcm"|"image/gif";

    /**
     * currently supported only in Firefox.
     */
    bitsPerSecond: number;

    /**
     * only chrome---whilst using WhammyRecorder.
     */
    quality: number;

    /**
     * only chrome---whilst using WhammyRecorder
     */
    speed: number;
  }

  /**
   * force WebAudio API on all browsers
   * it allows you record remote audio-streams in Firefox
   * it also works in Microsoft Edge
   */
  export class StereoAudioRecorder {}

  /**
   * force webp based webm encoder on all browsers
   */
  export class WhammyRecorder {}

  /**
   * force MediaRecorder API on all browsers
   * Chrome Canary/Dev already implemented MediaRecorder API however it is still behind a flag.
   * so this property allows you force MediaRecorder in Chrome.
   */
  export class MediaRecorderWrapper {}

  /**
   * force GifRecorder in all browsers.
   * Both WhammyRecorder and MediaRecorder API will be ignored.
   */
  export class GifRecorder {}
}
