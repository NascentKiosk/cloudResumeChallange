from azure.cosmos import CosmosClient
import os
import json
import azure.functions as func

app = func.FunctionApp()

endpoint = os.environ["COSMOS_ENDPOINT"]
key = os.environ["COSMOS_KEY"]

client = CosmosClient(endpoint, key)
db = client.get_database_client("resume-db")
container = db.get_container_client("counter")

@app.function_name(name="visitorCounter")
@app.route(
    route="visitorCounter",
    auth_level=func.AuthLevel.ANONYMOUS
)
def visitorCounter(req: func.HttpRequest) -> func.HttpResponse:

    item = container.read_item(
        item="visitorCount",
        partition_key="visitorCount"
    )

    item["count"] += 1

    container.replace_item(
        item=item["id"],
        body=item
    )

    return func.HttpResponse(
        json.dumps({"count": item["count"]}),
        mimetype="application/json"
    )