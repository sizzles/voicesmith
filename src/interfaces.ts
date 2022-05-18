export interface WaveSurverInterface {
  load: (a: string) => void;
  pause: () => void;
  play: () => void;
  stop: () => void;
  on: (a: string, b: () => any) => void;
}

export interface StatisticInterface {
  name: string;
  entries: Array<
    ImageStatisticInterface | AudioStatisticInterface | GraphStatisticInterface
  >;
}

export interface ImageStatisticInterface {
  name: string;
  step: number;
  path: string;
}

export interface AudioStatisticInterface {
  name: string;
  step: number;
  path: string;
}

export interface GraphStatisticInterface {
  name: string;
  step: number;
  value: number;
}

export interface ModelSpeakerInterface {
  name: string;
  speakerID: number;
}

export interface ModelInterface {
  ID: number;
  name: string;
  type: "Delighful_FreGANv1_v0.0";
  createdAt: string;
  description: string;
  speakers: ModelSpeakerInterface[];
}

export interface DatasetInterface {
  ID: number;
  name: string;
  speakerCount?: number;
  speakers: SpeakerInterface[];
  referencedBy: string | null;
}

export interface SpeakerSampleInterface {
  ID?: number;
  txtPath: string;
  audioPath: string;
  text: string;
  fullAudioPath?: string;
}

export interface SpeakerInterface {
  ID: number;
  name: string;
  samples: SpeakerSampleInterface[];
}

export interface ConfigurationInterface {
  name: string;
  validationSize: number;
  minSeconds: number;
  maxSeconds: number;
  useAudioNormalization: boolean;
  acousticLearningRate: number;
  acousticTrainingIterations: number;
  acousticBatchSize: number;
  acousticGradAccumSteps: number;
  acousticValidateEvery: number;
  vocoderLearningRate: number;
  vocoderTrainingIterations: number;
  vocoderBatchSize: number;
  vocoderGradAccumSteps: number;
  vocoderValidateEvery: number;
  device: string;
  onlyTrainSpeakerEmbUntil: number;
  datasetID: number | null;
}

export interface RunInterface {
  ID: number;
  type: "trainingRun" | "dSCleaning" | "textNormalizationRun";
}

export interface SynthConfigInterface {
  text: string;
  speakerID: number | null;
  talkingSpeed: number;
}

export interface TrainingRunInterface {
  ID: number;
  imageStatistics: ImageStatisticInterface[];
  audioStatistics: AudioStatisticInterface[];
  graphStatistics: GraphStatisticInterface[];
  stage:
    | "not_started"
    | "preprocessing"
    | "acoustic_fine_tuning"
    | "ground_truth_alignment"
    | "vocoder_fine_tuning"
    | "save_model"
    | "finished";
  configuration: ConfigurationInterface;
  acousticFineTuningProgress: number;
  vocoderFineTuningProgress: number;
  preprocessingStage:
    | "not_started"
    | "copying_files"
    | "normalize"
    | "gen_speaker_embeddings"
    | "extract_data"
    | "finished";
}

export interface TrainingRunBasicInterface {
  ID: number;
  name: string;
  stage:
    | "not_started"
    | "preprocessing"
    | "acoustic_fine_tuning"
    | "ground_truth_alignment"
    | "vocoder_fine_tuning"
    | "save_model"
    | "finished";
  datasetName: string | null;
}

export interface CleaningRunInterface {
  ID: number;
  name: string;
  stage:
    | "not_started"
    | "gen_file_embeddings"
    | "choose_samples"
    | "apply_changes";
}

export interface TrainingRunProgressInterface {
  stage:
    | "not_started"
    | "preprocessing"
    | "acoustic_fine_tuning"
    | "ground_truth_alignment"
    | "vocoder_fine_tuning"
    | "save_model"
    | "finished";
  preprocessingStage:
    | "not_started"
    | "copying_files"
    | "gen_vocab"
    | "gen_alignments"
    | "extract_data"
    | "finished";
  preprocessingCopyingFilesProgress: number;
  preprocessingGenVocabProgress: number;
  preprocessingGenAlignProgress: number;
  preprocessingExtractDataProgress: number;
  acousticFineTuningProgress: number;
  groundTruthAlignmentProgress: number;
  vocoderFineTuningProgress: number;
}

export interface UsageStatsInterface {
  cpuUsage: number;
  totalRam: number;
  ramUsed: number;
  totalDisk: number;
  diskUsed: number;
}

export interface AudioSynthInterface {
  ID: number;
  filePath: string;
  text: string;
  speakerName: string;
  modelName: string;
  createdAt: string;
  samplingRate: number;
  durSecs: number;
}

export interface PreprocessingRunInterface {
  ID: number;
  name: string;
  stage: string;
  type: "textNormalization" | "dSCleaning";
  datasetID?: number;
  datasetName: string | null;
}

export interface TextNormalizationInterface extends PreprocessingRunInterface {
  type: "textNormalization";
  language: "en" | "es" | "de" | "ru";
  stage: "not_started" | "text_normalization" | "choose_samples" | "finished";
}

export interface TextNormalizationRunConfigInterface {
  ID: number;
  name: string;
  language: "en" | "es" | "de" | "ru";
  datasetID: number | null;
}

export interface DSCleaningInterface extends PreprocessingRunInterface {
  type: "dSCleaning";
  stage:
    | "not_started"
    | "gen_file_embeddings"
    | "detect_outliers"
    | "choose_samples"
    | "apply_changes"
    | "finished";
}

export interface CleaningRunConfigInterface {
  name: string;
  datasetID?: number;
}

export interface FileInterface {
  path: string;
  extname: string;
  name: string;
  basename: string;
}

export interface NoisySampleInterface {
  ID: number;
  text: string;
  audioPath: string;
  labelQuality: number;
}

export interface TextNormalizationConfigInterface {
  name: string;
  language: "en" | "de" | "es";
  datasetID: number | null;
}

export interface TextNormalizationSampleInterface {
  ID: number;
  sampleID: number;
  oldText: string;
  newText: string;
  reason: string;
  audioPath: string;
}

export interface TerminalMessage {
  type: "message" | "error";
  message: string;
}

export interface SettingsInterface {
  dataPath: string | null;
}