#!/usr/bin/env python3
"""
Provide stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient


def get_log_stats():
    """
    Get statistics about Nginx logs from MongoDB.
    """
    client = MongoClient("mongodb://127.0.0.1:27017")
    db = client.logs
    collection = db.nginx

    # Total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods count
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    # Status check count
    status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_count} status check")


if __name__ == "__main__":
    get_log_stats()
