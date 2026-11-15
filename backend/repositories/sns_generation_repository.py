from sqlalchemy.orm import Session

from models.sns_generation_history import SnsGenerationHistory


class SnsGenerationRepository:
    def create(self, db: Session, history: SnsGenerationHistory):

        db.add(history)

        db.commit()

        db.refresh(history)

        return history
