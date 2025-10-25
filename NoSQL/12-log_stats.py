#!/usr/bin/env python3
"""Display stats about nginx"""
from pymongo import MongoClient


def display_stats(nginx_collection):
    """Display stats about nginx"""
    print(f"{nginx_collection.estimated_document_count()} logs")
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        method_count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")
    status_check_count = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    display_stats(client.logs.nginx)
