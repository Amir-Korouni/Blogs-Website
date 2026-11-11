
import json
from pathlib import Path

source = Path("./public/swagger/openapi.json")
destination = Path("./public/swagger/openapi.fixed.json")

with source.open("r", encoding="utf-8") as file:
    spec = json.load(file)

parameters = spec["paths"]["/posts"]["get"]["parameters"]

unique_parameters = []
seen = set()

for parameter in parameters:
    key = json.dumps(parameter, sort_keys=True)

    if key not in seen:
        seen.add(key)
        unique_parameters.append(parameter)
    else:
        print(f"Duplicate removed: {parameter['name']}")

spec["paths"]["/posts"]["get"]["parameters"] = unique_parameters

with destination.open("w", encoding="utf-8") as file:
    json.dump(spec, file, indent=2, ensure_ascii=False)

print(f"\nFixed file created: {destination}")
