#!/usr/bin/env python3
"""
Find schools by topic
"""

from pymongo.collection import Collection


def schools_by_topic(mongo_collection: Collection, topic: str) -> list:
    """
    Return the list of schools having a specific topic.

    Args:
        mongo_collection: The pymongo collection object
        topic: The topic searched

    Returns:
        A list of schools that have the specified topic
    """
    return list(mongo_collection.find({"topics": topic}))
