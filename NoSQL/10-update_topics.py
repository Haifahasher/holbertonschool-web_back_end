#!/usr/bin/env python3
"""
Update topics of a school document
"""

from pymongo.collection import Collection


def update_topics(mongo_collection: Collection, name: str, topics: list) -> None:
    """
    Update topics of a school document based on the name.

    Args:
        mongo_collection: The pymongo collection object
        name: The school name to update
        topics: List of topics approached in the school
    """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
