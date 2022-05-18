import wandb
import numpy as np
from typing import List, Union
from voice_smith.utils.loggers import Logger


class WandBLogger(Logger):
    def __init__(self, training_run_name):
        super().__init__()
        wandb.init(id=training_run_name, resume="allow")

    def log_image(self, name: str, image: np.ndarray, step: int):
        image = self.map_image_color(image)
        wandb.log({name: wandb.Image(image)}, step=step)

    def log_graph(self, name: str, value: float, step: int):
        wandb.log({name: value}, step=step)

    def log_audio(self, name: str, audio: np.ndarray, step: int, sr: int):
        wandb.log({name: wandb.Audio(audio, sample_rate=sr)}, step=step)

    def query(self, query: str, args: List[Union[int, str]]) -> None:
        pass