import { ConfigurationInterface } from "./interfaces";

export const APP_VERSION = "0.1.0";
export const SERVER_URL = "http://localhost:12118";
export const POLL_LOGFILE_INTERVALL = 1000;
export const POLL_NULL_INTERVALL = 50;
export const CHART_BG_COLORS = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 205, 86)",
];
export const CHART_BG_COLORS_FADED = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 205, 86, 0.5)",
];
export const TEXT_EXTENSIONS = ["txt"];
export const AUDIO_EXTENSIONS = ["wav", "flac"];
export const STATISTIC_HEIGHT = 200;

export const trainingRunInitialValues: ConfigurationInterface = {
  name: "",
  validationSize: 5.0,
  minSeconds: 0.5,
  maxSeconds: 10,
  useAudioNormalization: true,
  acousticLearningRate: 0.0002,
  acousticTrainingIterations: 30000,
  acousticValidateEvery: 4000,
  acousticBatchSize: 5,
  acousticGradAccumSteps: 3,
  vocoderLearningRate: 0.0002,
  vocoderTrainingIterations: 10000,
  vocoderValidateEvery: 4000,
  vocoderBatchSize: 5,
  vocoderGradAccumSteps: 3,
  device: "CPU",
  onlyTrainSpeakerEmbUntil: 5000,
  datasetID: null,
};

export const defaultPageOptions = {
  defaultPageSize: 100,
  pageSizeOptions: [50, 100, 250, 1000, 5000],
};
