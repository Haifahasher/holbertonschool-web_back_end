#!/usr/bin/env python3
"""
Insert a new document in a collection
"""

from pymongo.collection import Collection


def insert_school(mongo_collection: Collection, **kwargs) -> str:
    """
    Insert a new document in a collection based on kwargs.

    Args:
        mongo_collection: The pymongo collection object
        **kwargs: Keyword arguments to create the document

    Returns:
        The new _id of the inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return str(result.inserted_id)
