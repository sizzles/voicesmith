export const DATASETS_ROUTE = {
  ROUTE: "/datasets",
  EDIT: {
    ROUTE: "/datasets/dataset-selection",
  },
  SELECTION: {
    ROUTE: "/datasets/dataset-selection",
  },
};

export const MODELS_ROUTE = {
  ROUTE: "/models",
  SELECTION: { ROUTE: "/models/selection" },
  SYNTHESIZE: { ROUTE: "/models/synthesize" },
};

export const TRAINING_RUNS_ROUTE = {
  ROUTE: "/training-runs",
  RUN_SELECTION: {
    ROUTE: "/training-runs/run-selection",
  },
  CREATE_MODEL: {
    ROUTE: "/training-runs/create-model",
    CONFIGURATION: {
      ROUTE: "training-runs/create-model/configuration",
    },
    DATA_PREPROCESSING: {
      ROUTE: "training-runs/create-model/data-preprocessing",
    },
    ACOUSTIC_TRAINING: {
      ROUTE: "training-runs/create-model/acoustic-training",
    },
    GENERATE_GTA: {
      ROUTE: "training-runs/create-model/generate-gta",
    },
    VOCODER_TRAINING: {
      ROUTE: "training-runs/create-model/vocoder-training",
    },
    SAVE_MODEL: {
      ROUTE: "training-runs/create-model/save-gta",
    },
  },
};

export const PREPROCESSING_RUNS_ROUTE = {
  ROUTE: "/preprocessing-runs",
  TEXT_NORMALIZATION: {
    ROUTE: "/preprocessing-runs/text-normalization",
    CONFIGURATION: {
      ROUTE: "/preprocessing-runs/text-normalization/configuration",
    },
    RUNNING: {
      ROUTE: "/preprocessing-runs/text-normalization/running",
    },
    CHOOSE_SAMPLES: {
      ROUTE: "/preprocessing-runs/text-normalization/choose-samples",
    },
  },
  DATASET_CLEANING: {
    ROUTE: "/preprocessing-runs/dataset-cleaning",
    CONFIGURATION: {
      ROUTE: "/preprocessing-runs/dataset-cleaning/configuration",
    },
  },
  RUN_SELECTION: { ROUTE: "/preprocessing-runs/run-selection" },
};

export const SETTINGS_ROUTE = {
  ROUTE: "/settings",
};