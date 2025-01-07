import requests

# URL을 한글 버전으로 변경
RIOT_API_URL = "https://ddragon.leagueoflegends.com/cdn/{version}/data/ko_KR/champion.json"


def fetch_champions_data(version: str):
    """
    Riot API에서 한글 버전의 챔피언 데이터를 가져옵니다.
    """
    try:
        response = requests.get(RIOT_API_URL.format(version=version))
        response.raise_for_status()
        return response.json()["data"]
    except requests.RequestException as e:
        print(f"Error fetching champion data: {e}")
        return {}

def get_latest_version():
    """
    Riot API에서 최신 버전을 가져옵니다.
    """
    try:
        response = requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
        response.raise_for_status()
        versions = response.json()
        return versions[0]  # 최신 버전 반환
    except requests.RequestException as e:
        print(f"Error fetching latest version: {e}")
        return None

def get_champions_data():
    """
    최신 버전의 챔피언 데이터를 가져옵니다.
    """
    latest_version = get_latest_version()
    if not latest_version:
        return {}
    return fetch_champions_data(latest_version)
