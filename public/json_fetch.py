import urllib.request
import json


def return_json():
    url = "http://localhost:9090/micro/good"
    response = urllib.request.urlopen(url)
    data = json.loads(response.read())
    return data


def snowboard_count():
    data = return_json()
    snowboard_events = [raw_event for raw_event in data if raw_event["event"]
                        ["name_tracker"] == "SnowboardTracker"]
    return len(snowboard_events)


def ski_count():
    data = return_json()
    ski_events = [raw_event for raw_event in data if raw_event["event"]
                  ["name_tracker"] == "SkiTracker"]
    return len(ski_events)
