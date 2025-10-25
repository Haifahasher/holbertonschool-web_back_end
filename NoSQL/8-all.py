#!/usr/bin/env python3
"""
List all documents in a collection
"""

from pymongo.collection import Collection


def list_all(mongo_collection: Collection) -> list:
    """
    List all documents in a collection.

    Args:
        mongo_collection: The pymongo collection object

    Returns:
        A list of all documents in the collection
    """
    return list(mongo_collection.find())
