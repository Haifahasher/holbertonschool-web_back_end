#!/usr/bin/env python3
"""Module for measuring runtime of parallel async operations."""
import asyncio
import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Measure total runtime of executing async_comprehension 4 times in parallel.

    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total execution time.

    Returns:
        Total runtime in seconds as a float
    """
    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.time()
    return end_time - start_time
