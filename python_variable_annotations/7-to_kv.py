#!/usr/bin/env python3
"""Module for creating a tuple from a string and the square of a number."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with a string and the square of a number.

    Args:
        k: String key
        v: Integer or float value

    Returns:
        A tuple where the first element is k and the second is v squared
    """
    return (k, float(v**2))
