#!/usr/bin/env python3
"""Module for summing a list of floats."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Calculate the sum of a list of floats.

    Args:
        input_list: List of float numbers

    Returns:
        The sum of all floats in the list
    """
    return sum(input_list)
